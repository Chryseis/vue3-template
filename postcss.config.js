import autoprefixer from 'autoprefixer'
import pxtorem  from 'postcss-pxtorem'

export default {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue({ file }) {
        return file.indexOf('van') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    })
  ]
}
