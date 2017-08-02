
export const extractTextBefore = (word, delimeter = '@') => {
  const index = word.indexOf(delimeter)
  if(index === -1){
    return word
  }
  return word.substring(0, index)
}
