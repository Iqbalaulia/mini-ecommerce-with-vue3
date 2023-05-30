import moment from 'moment'

export default function useHelper(){
  const formatDate = (payload) => {
    moment().locale('id')
    return moment(payload, 'YYYY-MM-DD').format('DD MMMM YYYY')
  }

  const formatDateTime = (payload) => {
    moment().locale('id')
    return moment(payload, 'YYYY-MM-DD HH:mm').format('DD MMMM YYYY HH:mm')
  }

  const formatCurrency = (payload) => {
    return (
      'Rp ' +
      parseInt(payload)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    )
  }

  const formatCurrencyWithoutRp = (payload) => {
    return parseInt(payload)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return {
    formatDate,
    formatDateTime,
    formatCurrency,
    formatCurrencyWithoutRp,
  }
}