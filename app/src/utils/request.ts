import ky from 'ky'

const requestInstance = ky.create({
  prefixUrl: 'http://localhost:3001',
})

export default requestInstance
