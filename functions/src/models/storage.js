const isArray = require('lodash/isArray')
const endsWith = require('lodash/endsWith')

const CONSTANTS = require('../helpers/constants')

const gcs = require('@google-cloud/storage')({
  projectId: CONSTANTS.projectId,
  credential: CONSTANTS.credentials,
})

const projectBucket = gcs.bucket(CONSTANTS.bucket)

const getPublicUrl = (fullName) => (
  `https://storage.googleapis.com/${CONSTANTS.bucket}/${fullName}`
)

const createDefaultOptions = (file) => (
  {
    gzip: true,
    metadata: {
      contentType: file.mimetype,
      contentDisposition: `inline; filename=${file.originalname}`,
    },
    public: true,
  }
)

const createResponse = (filename, fullName) => ({
  filename,
  url: getPublicUrl(fullName),
})

const saveFileToGCS = (file, folder = '',
  createOptions = createDefaultOptions) => {
  const originalName = file.originalname
  const fullName = folder + originalName
  const gcsFile = projectBucket.file(fullName)
  return gcsFile.save(file.buffer, createOptions(file))
  .then(() => createResponse(file.originalname, fullName))
}

const uploadFile = (req, res, next) => {
  if (!req.files || !req.files.length) {
    res.send('please attach a file.')
  }
  let folder = req.body.folder || ''
  if (folder && !endsWith(folder, '/')) {
    folder = folder + '/'
  } else if (folder === '/') {
    // reset folder to empty if folder is just '/'
    folder = ''
  }

  Promise.all(req.files.map((file) => saveFileToGCS(file, folder)))
  .then((results) => {
    res.send(results)
  })
}

module.exports.uploadFile = uploadFile