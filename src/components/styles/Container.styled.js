import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
  background: ${({ theme }) => theme.body.bg};
  color: ${({ theme }) => theme.body.color};
  margin: 0 auto;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`
