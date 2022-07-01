import styled from 'styled-components'

export const MainContentContainer = styled.div`
  > div {
    > h4 {
      padding: 0 20px;
    }
  }
`
export const MCCreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

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

          &::before {
            border-color: rgba(230, 232, 233, 0.23);
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

export const ECUserContent = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > div {
      &:nth-of-type(2) {
        width: 90%;
        margin-left: 15px;
        /* margin-bottom: -25px; */

        > a {
          text-decoration: none;

          h5 {
            margin-top: 0px;
          }
        }

        > p {
          /* margin-bottom: 25px; */
        }
      }
    }
  }
`

export const MCPostContent = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

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

        > div {
          display: flex;
          justify-content: space-between;

          > a {
            text-decoration: none;
            display: block;
            width: 50%;

            h5 {
              font-size: 0.875rem;
              font-weight: bold;
              margin-top: 0;

              span {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.6);
              }
            }
          }

          p {
            align-self: flex-end;
          }
        }

        > p {
          display: block;
          margin-top: -15px;
          width: 100%;
          overflow-wrap: break-word;
          font-weight: lighter;
          padding-bottom: 20px;
        }
      }
    }
  }
`

export const ProfileContentContainer = styled.div`
  width: 600px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  > div {
    :first-of-type {
      width: 600px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      height: 60px;
      background-color: rgba(0, 0, 0, 0.65);
      position: fixed;
      top: 0;

      > button {
        width: 40px;
        height: 40px;
        margin-right: 10px;

        :hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        > svg {
          fill: #e6e8e9;
        }
      }

      > p {
        font-size: 18px;
      }
    }

    :nth-of-type(2) {
      margin-top: 60px;

      > div {
        :first-of-type {
          position: relative;
          width: 100%;
          height: 200px;

          > div {
            :first-of-type {
              overflow: hidden;
              height: 100%;

              > img {
                width: 100%;
              }
            }

            :nth-of-type(2) {
              box-sizing: content-box;
              border: 4px solid #11181d;
              position: absolute;
              bottom: -60px;
              left: 16px;
            }
          }
        }
      }
    }

    :nth-of-type(3) {
      width: 100%;
      display: flex;
      flex-direction: column;

      > button {
        align-self: flex-end;
        margin-right: 20px;
        margin-top: 30px;
      }

      > div {
        width: 100%;
        padding: 0 20px;

        > h3 {
          margin: 0px;
          margin-top: 15px;
        }

        > p {
          margin: 0px;
          font-weight: lighter;
          font-size: 14px;
        }
      }

      > p {
        padding: 0 20px;
      }
    }
  }
`

export const ProfileEditDataContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #e6e8e9;

  > form {
    margin-bottom: 20px;
    > div {
      margin: 20px 0;
      :first-of-type {
        width: 100%;
        margin: 0;

        > div {
        :first-of-type {
          position: relative;
          width: 100%;
          height: 200px;

          > div {
            :first-of-type {
              overflow: hidden;
              height: 100%;
              position: relative;

              > img {
                width: 100%;
              }

              > div {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.25);
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.5s ease;

                > button {
                  width: 50px;
                  height: 50px;
                  background-color: rgba(0, 0, 0, 0.5);

                  :hover {
                    background-color: rgba(0, 0, 0, 0.35);
                  }

                  > svg {
                    fill: #e6e8e9;
                  }
                }
              }
            }

            :nth-of-type(2) {
              width: 120px;
              height: 120px;
              position: absolute;
              bottom: -60px;
              left: 16px;

              > div {
                position: relative;

                :first-of-type {
                  width: 100%;
                  height: 100%;
                  box-sizing: content-box;
                  border: 4px solid #11181d;
                }

                :nth-of-type(2) {
                  z-index: 200;
                  position: absolute;
                  top: 4px;
                  right: -4px;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.25);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  transition: all 0.5s ease;
                  border-radius: 50%;

                  > button {
                  width: 50px;
                  height: 50px;
                  background-color: rgba(0, 0, 0, 0.5);

                  :hover {
                    background-color: rgba(0, 0, 0, 0.35);
                  }

                  > svg {
                    fill: #e6e8e9;
                  }
                }
                }
              }
            }
          }
        }
      }
      }

      :nth-of-type(2) {
        width: 100%;
        margin-top: 80px;
        display: flex;
        justify-content: space-between;

        > div {
          width: 48%;
        }
      }

      :nth-of-type(3) {
        width: 100%;

        > div {
          width: 100%;
        }
      }

      :nth-of-type(4) {
        width: 100%;
        display: flex;
        justify-content: space-between;

        > div {
          width: 48%;
        }
      }

      :nth-of-type(5) {
        width: 100%;

        > div {
          width: 100%;
        }
      }

    > div {
      > label {
        color: #e6e8e9;
      }

      > div {
        > input, textarea {
          color: #e6e8e9;
        }

        > fieldset {
          border-color: rgba(230, 232, 233, 0.23);
        }
      }
    }
  }
}
`