import React from 'react'
import IconButtonComponent from '../../atoms/Icon'
import LogoComp from '../../atoms/Logo'
import { Stepper } from '../../organisms/Stepper'
import { StepperTemplate } from '../../templates/StepperTemplate'
import { useCustomHook } from './hook'
import Close from './../../../assets/icons/close.svg'

export const RegistrationPage = () => {
  const { activeTab, stepperDataArray } = useCustomHook()
  return (
    <StepperTemplate
      data-testid="registration-page"
      leftComponent={<LogoComp style={{ width: '103px', height: '22px' }} />}
      rightComponent={
        <IconButtonComponent src={Close} width="24px" height="24px" />
      }
      centerComponent={
        <Stepper activeTab={activeTab} stepDataArray={stepperDataArray} />
      }
      type="noAvatar"
      bottomComponent={stepperDataArray[activeTab].content}
    />
  )
}
