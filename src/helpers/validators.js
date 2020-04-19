import { helpers } from 'vuelidate/lib/validators'

export const supportedFileTypes = value => {
  if(!helpers.req(value)) return true
  
  const allowedFormat = ['jpeg', 'jpg', 'png'];
  const extension = value.split('.').pop()
  return allowedFormat.includes(extension)
}