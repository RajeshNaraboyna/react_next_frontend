import { Box, Dialog, Grid, styled } from '@mui/material'
import IconButtonComponent from '../../atoms/Icon'
import RightArrow from '../../../assets/icons/arrow-right.svg'
import ChevronRight from '../../../assets/icons/chevron-right.svg'
import { TypographyComponent } from '../../atoms/Typography'
import theme from '../../../theme/theme'
import InputTextComponent from '../InputField'
import { chooseBankConsts, chooseBankOptions } from '../../../utils/constants'
import { IconAndTextComponent } from '../../molecules/IcontAndText'
import Button from '../../atoms/Button'
import { useCallback, useState } from 'react'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface ChooseYourBankProps {
  onClickBank: () => void
  onClickTransactionCancel: () => void
  onClickBack?: () => void
}

const StyledBox = styled(Box)(() => ({
  height: '50px',
  width: '100%',
  alignItems: 'center',
  paddingBottom: '4px',
  '& :hover': {
    backgroundColor: `${theme.palette.structural_color.card_hover}`,
  },
}))

const StyledInnerBox = styled(Box)(() => ({
  paddingLeft: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}))

export const ChooseYourBank = (props: ChooseYourBankProps) => {
  const { onClickBank, onClickTransactionCancel, onClickBack } = props
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handelSearchChange = useCallback(
    (value: string) => setSearch(value),
    [search]
  )
  const handleClickOpen = useCallback(() => setPopUpOpen(true), [popUpOpen])
  const handleClose = useCallback(() => setPopUpOpen(false), [popUpOpen])

  const getBank = (src: string, text: string) => (
    <StyledBox>
      <StyledInnerBox>
        <IconAndTextComponent
          src={src}
          title={text}
          variant="body2"
          gap="15px"
          imgHeight="28px"
          imgWidth="28px"
          color={theme.palette.text_color.high_emphasis}
        />
        <img src={ChevronRight} />
      </StyledInnerBox>
    </StyledBox>
  )
  const getBankWithOnClick = (src: string, text: string) => (
    <StyledBox onClick={onClickBank} data-testid="getBankWithClick">
      <StyledInnerBox>
        <IconAndTextComponent
          src={src}
          title={text}
          variant="body2"
          gap="15px"
          imgHeight="28px"
          imgWidth="28px"
          color={theme.palette.text_color.high_emphasis}
        />
        <img src={ChevronRight} />
      </StyledInnerBox>
    </StyledBox>
  )
  return (
    <Box data-testid="chooseYourBank">
      <StepperTabTemplate
        isBigContainer={false}
        containerWidth="788px"
        containerHeight="641px"
        LeftComponent={
          <IconButtonComponent
            data-testid="backButton"
            src={RightArrow}
            height="32px"
            width="32px"
            onClick={onClickBack}
          />
        }
        CenterComponent={
          <>
            <Box
              sx={{
                height: '153px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: '516px' }}>
                <Box sx={{ height: '40px', mb: '44px' }}>
                  <TypographyComponent
                    variant="heading1"
                    children={chooseBankConsts.chooseText}
                    color={theme.palette.text_color.high_emphasis}
                  />
                </Box>
                <Box sx={{ mb: '20px' }}>
                  <InputTextComponent
                    width="516px"
                    height="60px"
                    helperText={chooseBankConsts.searchPlaceholder}
                    onChange={handelSearchChange}
                  />
                </Box>
                <Box>
                  {chooseBankOptions
                    .filter((bank) =>
                      bank.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(({ text, imageSrc }) =>
                      text === 'Lloyds'
                        ? getBankWithOnClick(imageSrc, text)
                        : getBank(imageSrc, text)
                    )}
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'center', mt: '32px' }}
                >
                  <Button
                    variant="outlined"
                    children={chooseBankConsts.cancelButton}
                    width="218px"
                    height="56px"
                    onClick={handleClickOpen}
                  />
                </Box>
              </Box>
            </Box>
            <Dialog
              open={popUpOpen}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <Grid
                container
                width="564px"
                height="335px"
                borderRadius="16px"
                alignItems="center"
                direction="column"
                display="flex"
              >
                <Grid item sx={{ mt: theme.spacing(13) }}>
                  <TypographyComponent
                    variant="heading1"
                    children={chooseBankConsts.popUpHeaderText}
                  />
                </Grid>
                <Grid item sx={{ mt: '26px' }}>
                  <TypographyComponent
                    variant="body1"
                    color={theme.palette.text_color.medium_emphasis}
                    children={chooseBankConsts.popUpSubText}
                  />
                </Grid>
                <Grid item sx={{ mt: '105px' }}>
                  <Box display="flex" gap={theme.spacing(5)}>
                    <Button
                      width="156px"
                      height="56px"
                      children={chooseBankConsts.buttonYes}
                      variant="contained"
                      onClick={onClickTransactionCancel}
                    />
                    <Button
                      width="156px"
                      height="56px"
                      children={chooseBankConsts.buttonNo}
                      variant="outlined"
                      onClick={handleClose}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Dialog>
          </>
        }
      />
    </Box>
  )
}
