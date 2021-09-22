import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
  background: ${({ theme }) => theme.container.bg};
  color: ${({ theme }) => theme.container.color};
  margin: 0 auto;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`
