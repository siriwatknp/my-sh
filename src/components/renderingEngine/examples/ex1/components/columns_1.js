import columns from 'components/renderingEngine/baseData/columnsData'

export default {
  ...columns,
  id: 'columns_1',
  columns: [
    {
      width: 6,
      components: [
        'title_1',
        'subtitle_1',
        'link_1',
      ],
      defaultSettings: {
        className: 'test'
      },
      defaultStyles: {
        padding: 50,
      }
    },
    {
      width: 6,
      components: [
        'text_1',
        'image_1',
      ]
    }
  ],
  defaultSettings: {
  }
}