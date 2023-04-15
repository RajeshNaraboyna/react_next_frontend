import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import ImageComponent from '.'
import '@testing-library/jest-dom'
import Transfer from './../../../assets/images/dashBoardTransfer.svg';

it('renders Image', () => {
  render(<ImageComponent src={Transfer} width="178px" height="183px"/>)

  const image = screen.getByTestId('image')
  expect(image).toBeInTheDocument();
})
    