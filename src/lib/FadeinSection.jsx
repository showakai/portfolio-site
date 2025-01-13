import { useInView } from 'react-intersection-observer'

const FadeinSection = ({ children, dir = 'in' }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`fade${dir} ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  )
}

export default FadeinSection
