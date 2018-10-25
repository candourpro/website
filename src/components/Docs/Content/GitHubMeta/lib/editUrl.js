import current from '../../lib/current'

export default (props) => (
  `https://github.com/candourpro/website/blob/master/src/docs/${current(props).slug}.md`
)
