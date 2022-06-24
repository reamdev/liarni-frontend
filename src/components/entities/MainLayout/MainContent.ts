import styled from 'styled-components'

export const MainContentContainer = styled.div`
`
export const MCCreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > div {
      &:nth-of-type(2) {
        width: 88%;

        > div {
          textarea {
            color: #e6e8e9;
          }
        }
      }
    }
  }

  button {
    margin: 10px 0;
    align-self: flex-end;
  }

  &::after {
    width: 100%;
    content: '';
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`

export const MCPostContainer = styled.div`
  margin-bottom: 30px;
`

export const MCPostContent = styled.div`
  width: 100%;
  padding-top: 15px;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > div {
      &:nth-of-type(2) {
        width: 90%;
        margin-left: 15px;
        margin-bottom: -25px;

        h5 {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: bold;
          margin-top: 0;

          span {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
          }
        }

        p {
          display: inline-block;
          margin-top: -18px;
          width: 100%;
          overflow-wrap: break-word;
          font-weight: lighter;
          padding-bottom: 20px;
        }
      }
    }
  }
`