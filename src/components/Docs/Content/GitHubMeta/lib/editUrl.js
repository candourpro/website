import current from '../../lib/current'

export default (props) => (
  `https://github.com/candourpro/website/edit/master/src/docs/${current(props).slug}.md`
)
