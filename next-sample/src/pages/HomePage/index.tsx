import { Box, Dialog, Grid } from '@mui/material'
import React, { useCallback, useEffect, useState, useContext } from 'react'
import theme from '../../../theme/theme'
import Button from '../../atoms/Button'
import ImageComponent from '../../atoms/Image'
import { SideNav } from '../../organisms/SideNav'
import Transfer from './../../../assets/images/dashBoardTransfer.svg'
import ShareImg from './../../../assets/images/shareImage.svg'
import LinkIcon from '../../../assets/icons/link.svg'
import EmailIcon from '../../../assets/icons/Email.svg'
import { DashboardTemplate } from '../../templates/DashboardTemplate'
import { TransactionStatusDetailsCard } from '../../organisms/TransactionStatusDetailsCard'
import { homePageConsts } from '../../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../organisms/Header'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import DropDown from '../../molecules/DropDown'
import {
  getBankDetailsForAccount,
  getTransactionsForAccount,
  updateTransactionDetails,
} from '../../../apis/library'
import { TransactionDetails } from '../../../utils/types'
import { useAuth0 } from '@auth0/auth0-react'
import AuthContext, { IAuthContext } from '../../../context/AuthProvider'

interface HomePageProps {
  userName?: string
  userId?: string
  userImg?: string
  handleLogout?: () => void
}

export const HomePage = (props: HomePageProps) => {
  const { auth, setAuth } = useContext<IAuthContext>(AuthContext)
  const { userId } = props
  const { logout } = useAuth0()
  const [sharePopup, setSharePopup] = useState(false)
  const [cancelPopup, setCancelPopup] = useState(false)
  const [transactions, setTransactions] = useState<TransactionDetails[]>(
    new Array()
  )
  const [transactionCancelData, setTransactionCancelData] =
    useState<TransactionDetails>()
  const [bankDetails, setBankDetails] = useState(new Array())
  const [cancelTransactionButton, setCancelTransactionButton] = useState(false)
  const [accountDetails, setAccountDetails] = useState({
    account: '',
    card: '',
  })

  useEffect(() => {
    getTransactions()
    getBankDetails()
  }, [])

  const getTransactions = async () => {
    const email = localStorage.getItem('email')
    await getTransactionsForAccount(email as string)
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error(error)
      })
  }

  const getBankDetails = async () => {
    const email = localStorage.getItem('email')
    await getBankDetailsForAccount(email as string)
      .then((data) => setBankDetails(data))
      .catch((error) => {
        console.error(error)
      })
  }
  const handleLogOutClick = useCallback(() => {
    logout()
    window.localStorage.clear()
    setAuth({})
  }, [])

  let navigate = useNavigate()
  const routeChange = useCallback(() => {
    navigate('/send_money')
  }, [])
  const handleShareClick = useCallback(() => {
    setSharePopup(!sharePopup)
  }, [sharePopup])

  const handleCancelPopupClick = useCallback(
    (transactionData: any) => {
      setCancelPopup(!cancelPopup)
      setTransactionCancelData(transactionData)
      setAccountDetails({ account: '', card: '' })
      setCancelTransactionButton(false)
    },
    [cancelPopup]
  )

  const handleCancelTransaction = useCallback(
    async (transaction?: TransactionDetails) => {
      await updateTransactionDetails(transaction?.transactionRefId as number, {
        status: 'canceled',
      }).catch((error) => {
        console.error(error)
      })
      setCancelPopup(false)
      setAccountDetails({ account: '', card: '' })
      setCancelTransactionButton(false)
      await getTransactions()
    },
    []
  )

  const handleSelectAccount = useCallback(
    (value: any) => {
      setAccountDetails({ account: value, card: accountDetails.card })
    },
    [accountDetails]
  )
  const handleSelectCard = useCallback(
    (value: any) => {
      setAccountDetails({ account: accountDetails.account, card: value })
    },
    [accountDetails]
  )

  useEffect(() => {
    if (accountDetails.account && accountDetails.card) {
      setCancelTransactionButton(true)
    }
  }, [accountDetails])
  return (
    <Grid data-testid="home-page">
      <DashboardTemplate
        containerWidth="98%"
        containerHeight="100%"
        headerWidth="101.5%"
        sideNavWidth="100%"
        bodyWidth="98%"
        bodyHeight="100%"
        SideNavComponent={
          <SideNav
            isBalancesAvailable={transactions.length > 0 ? true : false}
          />
        }
        HeaderComponent={
          <Header
            userIcon={String(auth?.user.picture)}
            userName={String(auth?.user.name)}
            userId={String(userId)}
            handleLogout={handleLogOutClick}
          />
        }
        BodyComponent={
          <Box
            display="flex"
            width="100%"
            height="100%"
            minHeight="60rem"
            sx={{ backgroundColor: theme.palette.structural_color.main }}
            paddingLeft={theme.spacing(8)}
            paddingRight={theme.spacing(8)}
          >
            <Grid container display="flex" direction="column">
              <Grid item width="100%">
                <Box
                  width="100%"
                  display="flex"
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Box sx={{ mt: '37px', mb: '24px' }}>
                    <TypographyComponent
                      variant="heading1"
                      children={homePageConsts.HOME_HEADER}
                    />
                  </Box>
                  <Box sx={{ mt: '29px', mb: '16px' }}>
                    <Button
                      variant="contained"
                      children={homePageConsts.SEND_MONEY_BUTTON}
                      width="159px"
                      height="56px"
                      onClick={routeChange}
                    />
                  </Box>
                </Box>
              </Grid>
              {transactions.length > 0 ? (
                <Grid item>
                  <Grid container key={transactions.length}>
                    {transactions.map((transactionData, index) => {
                      return (
                        <Grid
                          key={transactionData.transactionRefId}
                          item
                          width="100%"
                          height="100%"
                          marginBottom={theme.spacing(4)}
                        >
                          <TransactionStatusDetailsCard
                            transactionDetails={transactionData}
                            onShareClick={handleShareClick}
                            onCancelClick={() =>
                              handleCancelPopupClick(transactionData)
                            }
                          />
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              ) : (
                <Grid item>
                  <Grid
                    container
                    sx={{
                      width: '100%',
                      height: '557px',
                      borderRadius: theme.spacing(1),
                      backgroundColor: theme.palette.structural_color.white,
                    }}
                    alignItems="center"
                    display="flex"
                    direction="column"
                  >
                    <Grid item marginTop="102px">
                      <ImageComponent
                        src={Transfer}
                        width="178px"
                        height="183px"
                      />
                    </Grid>
                    <Grid item width="526px" height="64px" marginTop="43px">
                      <TypographyComponent
                        sx={{ textAlign: 'center' }}
                        variant="body1"
                        color={theme.palette.text_color.medium_emphasis}
                        children={homePageConsts.NONE_BODY_TEXT}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Dialog
              open={sharePopup}
              onClose={handleShareClick}
              PaperProps={{
                sx: { borderRadius: theme.spacing(4) },
              }}
            >
              <Grid
                container
                display="flex"
                direction="column"
                alignItems="center"
                sx={{
                  height: '524px',
                  width: '548px',
                }}
              >
                <Grid item marginTop={theme.spacing(10)}>
                  <TypographyComponent
                    variant="body1"
                    color={theme.palette.text_color.high_emphasis}
                    children={homePageConsts.SHARE_POPUP_HEADER}
                  />
                </Grid>
                <Grid item marginTop={theme.spacing(10)}>
                  <ImageComponent src={ShareImg} height="126px" width="175px" />
                </Grid>
                <Grid item marginTop={theme.spacing(10)}>
                  <Box
                    gap={theme.spacing(10)}
                    display="flex"
                    justifyContent="flex-end"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={theme.spacing(3)}
                    >
                      <IconButtonComponent
                        src={EmailIcon}
                        border="1px solid"
                        border_color={theme.palette.primary.primary_500}
                        height="60px"
                        border_radius="50%"
                        width="60px"
                      />
                      <TypographyComponent
                        variant="body3"
                        children="Email"
                        color={theme.palette.primary.primary_500}
                      />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={theme.spacing(3)}
                    >
                      <IconButtonComponent
                        src={LinkIcon}
                        border="1px solid"
                        border_color={theme.palette.primary.primary_500}
                        height="60px"
                        border_radius="50%"
                        width="60px"
                      />
                      <TypographyComponent
                        variant="body3"
                        children="Copy"
                        color={theme.palette.primary.primary_500}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  height="24px"
                  width="471px"
                  marginTop={theme.spacing(10)}
                  marginBottom={theme.spacing(10)}
                >
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text_color.medium_emphasis}
                    children={homePageConsts.SHARE_POPUP_BODY}
                  />
                </Grid>
              </Grid>
            </Dialog>
            <Dialog
              open={cancelPopup}
              onClose={handleCancelPopupClick}
              PaperProps={{
                sx: { borderRadius: theme.spacing(4) },
              }}
            >
              <Grid
                container
                display="flex"
                direction="column"
                sx={{
                  width: '564px',
                  minHeight: '335px',
                  maxHeight: '450px',
                  pl: theme.spacing(6),
                }}
              >
                <Grid item paddingTop={theme.spacing(6)}>
                  <TypographyComponent>
                    {`Cancel transfer #${transactionCancelData?.transactionRefId}`}
                  </TypographyComponent>
                </Grid>
                <Grid item paddingTop={theme.spacing(10)}>
                  <TypographyComponent
                    variant="caption1"
                    color={theme.palette.text_color.medium_emphasis}
                    children={homePageConsts.CANCEL_POPUP_HEADER}
                  />
                </Grid>
                <Grid item paddingTop={theme.spacing(4)}>
                  <DropDown
                    width="516px"
                    height="60px"
                    selctedTextColor={theme.palette.text_color.low_emphasis}
                    optionslist={[
                      {
                        code: 'existing',
                        label: 'An existing account',
                      },
                      { code: 'new', label: 'New account' },
                    ]}
                    placeholder="Select account"
                    onSelect={handleSelectAccount}
                  />
                </Grid>
                <Grid item paddingTop={theme.spacing(8)}>
                  <DropDown
                    width="516px"
                    height="60px"
                    selctedTextColor={theme.palette.text_color.low_emphasis}
                    optionslist={bankDetails}
                    placeholder="Select an option"
                    onSelect={handleSelectCard}
                  />
                </Grid>
                <Grid
                  item
                  alignSelf="center"
                  marginTop={theme.spacing(10)}
                  paddingBottom={theme.spacing(6)}
                >
                  {cancelTransactionButton && (
                    <Button
                      variant="contained"
                      children={homePageConsts.CANCEL_POPUP_BUTTON}
                      height="56px"
                      width="218px"
                      onClick={() =>
                        handleCancelTransaction(transactionCancelData)
                      }
                    />
                  )}
                </Grid>
              </Grid>
            </Dialog>
          </Box>
        }
      />
    </Grid>
  )
}
