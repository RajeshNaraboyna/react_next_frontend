import { useEffect, useState } from 'react'
import { BusinessActivityProps } from '.'

export const useCustomHook = (props: BusinessActivityProps) => {
  const [buttonEnable, setButtonEnable] = useState(false)
  const [category, setCategory] = useState('')
  const [subcategory, setSubcategory] = useState('')
  const [businessSize, setBusinessSize] = useState('')
  const onContinueHandler = () => {
    props.onContinue({
      category: category,
      subcategory: subcategory,
      businessSize: businessSize,
    })
  }
  const onCatogorySelectHandler = (value: string) => {
    setCategory(value)
  }
  const onSubCatogorySelectHandler = (value: string) => {
    setSubcategory(value)
  }
  const onBusinessSizeSelectHandler = (value: string) => {
    setBusinessSize(value)
  }

  const enableBunttonHandler = () => {
    if (category && subcategory && businessSize) {
      setButtonEnable(true)
    } else {
      setButtonEnable(false)
    }
  }

  useEffect(
    function () {
      enableBunttonHandler()
    },
    [category, subcategory, businessSize]
  )
  return {
    onCatogorySelectHandler,
    onSubCatogorySelectHandler,
    onBusinessSizeSelectHandler,
    onContinueHandler,
    buttonEnable,
  }
}
