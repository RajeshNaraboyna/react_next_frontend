import Business from './../assets/icons/Business.svg'
import User from '../assets/icons/user_primary.svg'
import BusinessDollar from './../assets/icons/Business-dollar.svg'
import RigntLogo from '../assets/icons/chevron-right.svg'
import RigntArrowIcon from '../assets/icons/arrow-right.svg'
import RectangleIcon from '../assets/icons/Rectangle.svg'
import Lloyds from '../../src/assets/icons/lloyds.svg'
import AndorraLogo from '../assets/images/chn.svg'
import AustriaLogo from '../assets/images/ast.svg'
import IndiaLogo from '../assets/images/ind.svg'
import UKLogo from '../assets/images/uk.svg'
import SBIIcon from '../assets/icons/sbi.svg'
import HDFCIcon from '../assets/icons/hdfc.svg'
import HSBCIcon from '../assets/icons/hsbc.svg'
import AxisIcon from '../assets/icons/axis.svg'
import BankIcon from '../assets/icons/bank.svg'
import HomeIcon from '../assets/icons/home_primary.svg'
import CardIcon from '../assets/icons/credit-card_secondary.svg'
import PersonIcon from '../assets/icons/Person.svg'
import TeamIcon from '../assets/icons/team.svg'
import AccountIcon from '../assets/icons/user_disabled.svg'
import GiftIcon from '../assets/icons/gift.svg'
import IndiaIcon from '../assets/images/ind.svg'
import AusIcon from '../assets/images/aus.svg'
import AstIcon from '../assets/images/ast.svg'
import PlusIcon from '../assets/icons/plus_secondary.svg'
import moment, { duration } from 'moment'
import { TransactionDetails, TransactionTimeDetailsRow } from './types'

export const BANK_TRANSACTION_REFERENCE_NO = '#356778810'

export const countryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: false,
  },
  {
    code: 'AE',
    label: 'United Kingdom',
    logo: UKLogo,
    disabled: false,
  },
  {
    code: 'AF',
    label: 'Austria',
    logo: AustriaLogo,
    disabled: false,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: false,
  },
]
export const confirmDirectorsOwnersValues = {
  director: {
    topText: 'Confirm your business directors',
    bottomText:
      'Please confirm these details from companies house. If anyone’s missing, add them below.',
  },
  owner: {
    topText: 'Confirm your business owners',
    bottomText:
      'Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.',
  },
}

export const sendingMoneyToOptions = [
  { text: 'My business', imageSrc: Business },
  { text: 'Someone', imageSrc: User },
  { text: 'Business or Charity', imageSrc: BusinessDollar },
]

export const MAX_ADDRESSES = 4
export const accountTypeStepperConsts = {
  headingText: 'What kind of account would you like to open today?',
  headingSubText: 'You can add another account later on, too.',
  personalText: 'Personal account',
  personalSecondaryText: 'Send, spend, and receive around the world for less.',
  businessText: 'Business account',
  businessSecondaryText: 'Do business or freelance work internationally.',
}

export const paymentRadioConst = {
  cardHeader: 'Fast and easy transfer',
  transferHeader: 'Low cost transfer',
  advTransferHeader: 'Advanced transfer',
  debitText: 'Debit Card',
  creditText: 'Credit Card',
  transferText: 'Transfer from your bank account',
  transferTypeText: 'Transfer the money using bank account',
  cardTypeText: 'Send from your Visa or Mastercard.',
  arriveByText: 'Should arrive by January 28th.',
  swiftText: 'Swift Transfer',
  swiftTypeText: 'Send GBP from your bank account outside the UK.',
}
export const BankDetailsForPaymentsConsts = {
  payeeName: 'Payee name',
  headerText: 'Our bank details for payments in GBP',
  headerSubText:
    'Below are the bank details for this payment. Please only send the money from an account in your name',
  referenceText: 'Use this reference',
  amountText: 'Amount to send',
  ukSortCodeText: 'UK Sort code',
  accNumberText: 'Account number',
  bankAddressText: 'Our bank address',
  buttonContinueText: 'Continue',
  buttonCancelText: 'Cancel this transfer',
  linkText1: 'You can use your Lloyds ',
  linkText2: 'online banking ',
  linkText3: 'or mobile app to make your bank transfer to PocketPay',
  lloydsIcon: Lloyds,
}
export const purposeComponentConsts = {
  optionsList: [
    {
      code: 'AD',
      label: 'Paying rent, utilities or property charges',
      disabled: true,
    },
    {
      code: 'AE',
      label: 'Paying suppliers/contractors/employees',
      disabled: true,
    },
    {
      code: 'AF',
      label: 'Paying for goods or services abroad',
      disabled: false,
    },
    {
      code: 'AG',
      label: 'Paying tax on profit or property',
      disabled: true,
    },
  ],
  placeholderOrLabel: "Tell us what you're using PocketPay for",
  headerTitle: "What's the purpose for using PocketPay",
  subHeaderTitle:
    "To help us keep PocketPay safe and secure, please tell us what you're using PocketPay for",
}

export const CountryCode = [
  { value: '+91', label: IndiaLogo },
  { value: '+44', label: UKLogo },
  { value: '+61', label: AustriaLogo },
]

export const TwoFactAuthStepperConst = {
  codeHeading: 'Enter the 6-digit code',
  codeSubText: 'We have sent it to ',
  codeHelperText: 'Enter code here',
  codeLable: '6-digit code',
  codeLink: 'I didn’t recieve a code',
  codeSubmitButton: 'Submit',
  anotherwayHeading: 'Approve another way',
  anotherwaySubtext: 'We have sent it to ',
  anotherwayResend: 'Resend code by SMS',
  anotherwayRightLogo: RigntLogo,
  anotherwayRightArrow: RigntArrowIcon,
  anotherwayCall: 'Send code by voice call',
  anotherwayLink: 'Use a different phone number',
  phonePageHeading: 'Verify your phone number with a code',
  phonePageSubtext: 'It helps us keep your account secure.',
  phonePageContinue: 'Continue',
  phonePageRectangleIcon: RectangleIcon,
}

export const chooseBankOptions = [
  { text: 'State bank of India', imageSrc: SBIIcon },
  { text: 'HDFC', imageSrc: HDFCIcon },
  { text: 'HSBC', imageSrc: HSBCIcon },
  { text: 'Axis', imageSrc: AxisIcon },
  { text: 'Lloyds', imageSrc: Lloyds },
  { text: 'Other Bank', imageSrc: BankIcon },
]

export const chooseBankConsts = {
  chooseText: 'Choose your bank',
  searchPlaceholder: 'Start typing to search',
  cancelButton: 'Cancel the transfer',
  popUpHeaderText: 'Are you sure ?',
  popUpSubText: 'You want to cancel this transfer',
  buttonYes: 'Yes',
  buttonNo: 'No',
}

export const transactionCardConsts = {
  heading: 'Transfer details',
  recipient: 'Recipient details',
  continueButton: 'Continue to pay',
  cancelButton: 'Cancel this transfer',
}
export const payFromYourBankConst = {
  payHeading: 'Pay from your Lloyds account',
  paySubtext1:
    'You’ll be redirected to Lloyds, where you can securely log in to your own ',
  paySubtext2: ' account and approve the payment for your ',
  paySubtext3: ' transfer.',
  paySubHeading: 'Safe and Secure',
  payPoint1: 'We’ll use an encrypted end to end connection.',
  payPoint2:
    'Your bank will not share your login details with PocketPay or anyone else.',
  payContinueButton: 'Continue to pay',
  payManualButton: 'Pay manually',
}

export const sideNavItems = [
  {
    title: 'Home',
    src: HomeIcon,
  },
  {
    title: 'Cards',
    src: CardIcon,
  },
  {
    title: 'Recipients',
    src: PersonIcon,
  },
  {
    title: 'Team',
    src: TeamIcon,
  },
  {
    title: 'Account',
    src: AccountIcon,
  },
  {
    title: 'Invite & earn 150 GBP',
    src: GiftIcon,
  },
]

export const sideNavBalancesItems = [
  {
    src: IndiaIcon,
    text: '10,000.00 INR',
  },
  {
    src: AstIcon,
    text: '1200 GBP',
  },
  {
    src: AusIcon,
    text: '192.00 USD',
  },
  {
    src: PlusIcon,
    text: 'Open a balance',
  },
]

export const amountStepperConsts = {
  headerTitle: 'How much would you like to transfer',
  senderDropDownLabel: 'You send',
  receipientDropDownLabel: 'Receipients gets',
  transferContinueButton: 'Continue',
  countryInfo: [
    {
      currency: 'INR',
      icon: IndiaLogo,
      label: 'India',
      unitValueInDollar: 0.012,
      code: 'AG',
    },
    {
      currency: 'GBP',
      icon: UKLogo,
      label: 'United Kingdom',
      unitValueInDollar: 1.22,
      code: 'AE',
    },
    {
      currency: 'AUD',
      icon: AustriaLogo,
      label: 'Austria',
      unitValueInDollar: 0.67,
      code: 'AF',
    },
    {
      currency: 'EUR',
      icon: AndorraLogo,
      label: 'Andorra',
      unitValueInDollar: 1.06,
      code: 'AD',
    },
  ],
  countryOptions: [
    {
      code: 'AD',
      label: 'Andorra',
      logo: AndorraLogo,
      disabled: false,
      subLabel: 'EUR',
    },
    {
      code: 'AE',
      label: 'United Kingdom',
      logo: UKLogo,
      disabled: false,
      subLabel: 'GBP',
    },
    {
      code: 'AF',
      label: 'Austria',
      logo: AustriaLogo,
      disabled: false,
      subLabel: 'AUD',
    },
    {
      code: 'AG',
      label: 'India',
      logo: IndiaLogo,
      disabled: false,
      subLabel: 'INR',
    },
  ],
  transferDetails: [
    'Low cost transfer fee:',
    'Guaranteed rate (24 hrs):',
    'Total amount:',
  ],
}

export const ConfirmBusinessStepperConsts = {
  registerdConfirmLabel:
    'Sole trader, freelancer or not registered with Companies house?',
  confirmBusinessDetailsLabel: 'Confirm your business details',
  businessDetailsLabel: 'Business details',
  registeredNumberLabel: 'Registration number:',
  registeredNumberLabel1: 'Registration number',
  enterRegNumberLabel: 'Enter Registration number',
  registrationAddrLabel: 'Registration address:',
  registrationAddrLabel1: 'Registration address',
  enterRegNumLabel: 'Enter Registration address',
  businessNameLabel: 'Business name: ',
  businessNameLabel1: 'Business name',
  enterBusinessNameLabel: 'Enter Business name',
}

export const durationDetailsForTimelineStepper: TransactionTimeDetailsRow[] = [
  {
    content: 'You set up your transfer',
    statusInTimeline: 'completed',
    timeString: 'Today at 6:43 pm',
  },
  {
    content: 'We recieved your GBP',
    statusInTimeline: 'completed',
    timeString: 'Today at 6:44 pm',
  },
  {
    content: 'Your money’s being processed',
    statusInTimeline: 'inProgress',
    timeString: 'Today at 6:50 pm',
  },
  {
    content: 'We pay out your EUR',
    statusInTimeline: 'pending',
    timeString: 'Tomorrow at 12:00 am',
  },
  {
    content: 'George max recieves your EUR',
    statusInTimeline: 'pending',
    timeString: 'Tomorrow at 6:00 am',
  },
]

export const sampleTransactionDetails: TransactionDetails = {
  transactionStatus: 'inProgress',
  transactionTimeStamps: [
    moment().subtract(100, 'm').toDate(),
    moment().subtract(100, 'm').add(1, 'm').toDate(),
    moment().subtract(100, 'm').add(7, 'm').toDate(),
    moment().subtract(100, 'm').add(317, 'm').toDate(),
    moment().subtract(100, 'm').add(677, 'm').toDate(),
  ],
  transactionFee: 3.69,
  sendingCurrency: 'GBP',
  receivingCurrency: 'EUR',
  senderName: 'Ross Gener',
  receiverName: 'Mario Gabriel',
  sendingMoney: 100,
  receivingMoney: 114.68,
  guaranteedRate: 1.1897,
  transactionRefId: 85236987411,
}

export const transactionDetailsCardConsts = {
  cancelHeader: 'Your money will be refunded',
  cancelDescription:
    'When we receive your money, we’ll give you a refund. Refunds usually take 3-5 working days.',
  cancelButtonText: 'Cancel the transfer',
  detailsFirstLine: 'Set up by:',
  detailsSecondLine: 'Transfer number:',
  tab1Label: 'UPDATES',
  tab2Label: 'DETAILS',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed'
}
export const reviewStepperTabConst = {
  tAndcText: 'When you press “Confirm” you agree with Wise Terms & Conditions',
  confirmButton: 'Confirm and continue',
  pageHeader: 'Review details of your transfer',
  subHeading1: 'Transfer details',
  subHeading2: 'Recipient details',
  subHeading3: 'Schedule details',
  transferText: 'Transfer details',
  amountText: 'Amount',
  feeText: 'Fee',
  amountConvertText: 'Amount we’ll convert',
  ratetext: 'Guranteed rate',
  businessDetailsText: 'Business details',
  nameText: 'Name',
  emailText: 'Email',
  accountNumberText: 'Account number',
  accountType: 'Account type',
  sendingText: 'Sending',
  shouldArrive: 'Should arrive',
  repeatsText: 'Repeats',
}

export const YourBusinessStepperConsts = {
  searchBusinessStepperLabel: 'Search for your business',
  selectYourBusinessLabel: 'Select your business',
  searchBusinessDescLabel:
    'Sole trader, freelancer or not registered with Companies house?',
}

export const RecipientStepperConsts = {
  sendToSomeOneLabel: 'Send to someone',
  emailLabel: 'Email',
  iKnowBankDetailsLabel: 'I know their bank details',
  recipientDetailsLabel: 'Receipient details',
  acctNumberLabel: 'Account Number',
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  financeCodeLabel: 'The Indian Financial System Code ',
  acctTypeLabel: 'Select account type',
  continueLabel: 'Continue',
}

export const addTradingAddressConsts = {
  header: 'Add trading address',
  inputFieldHelperText: 'Enter Your Address',
  buttonText: 'Add',
}

export const confirmOwnerDirectorConsts = {
  directorText: 'Director',
  shareHolderText: 'Shareholder',
  firstNameFieldLabel: 'First name',
  lastNameFieldLabel: 'Last name',
  countryFieldLabel: 'Country of residence',
  continueButtonText: 'Continue',
  textForAddOwner: 'Add another owner',
  textForAddDirector: 'Add another director',
}

export const datePickerConsts = {
  label: 'Date of birth',
}

export const payStepperTabConsts = {
  debitCardInputHelperText: 'CVV / CVC',
  screen_0_Header: 'Choose your transfer type',
  accountType: 'business',
  path_0_screen_3_Header:
    "Next, go to your Lloyds's online banking and make a payment",
  bankDetails: {
    reference: BANK_TRANSACTION_REFERENCE_NO,
    ukSortCode: '24-14-70',
    bankAdress: [
      'PocketPay',
      '56 Shoreditch High Street',
      'London',
      'E16JJ',
      'United Kingdom',
    ],
  },
  path_1_screen_1_Header: 'Pay with your card',
  cardTabDetails: [
    {
      label: 'Saved Card',
      value: 'saved-card',
    },
    {
      label: 'New Card',
      value: 'new-card',
    },
  ],
  cardRadioDetails: {
    debitCardName: 'EUR Visa Debit',
    lastFourDigitLabel: 'Last four digit',
    expiryDateLabel: 'Expiry date',
    cardDigits: ['9313', '3253'],
    expiryDates: ['09/25', '02/27'],
  },
  path_1_screen_2_Header: 'Pay with your card',
  path_1_screen_2_CardHeader: 'Confirm your purchase',
  path_1_screen_2_CardSubHeader: ' to PocketPay using visa card ending ',
  path_1_screen_2_CardDescription: [
    'Step 1: Open and confirm the push notification we sent to your mobile.',
    'Step 2: Return to this screen and press the button below to finish your purchase.',
  ],
  completeButton: 'Complete',
}

export const signUpConsts = {
  createPocketPayLabel: 'Create your PocketPay account',
  welcomeBackLabel: 'Welcome back',
  emailLabel: 'Email',
  emailYourAddrLabel: 'Enter your email address',
  passwordLabel: 'Password',
  enterYourPasswordLabel: 'Enter your password',
  nextLabel: 'Next',
  signInLabel: 'Sign In',
  logInLabel: 'Log In',
  logInLinkLabel: 'Log in',
  rememberMeLabel: 'Remember me',
  troubleLogginLabel: 'Trouble logging in?',
  orLogInLabel: 'Or, log in with',
  byRegisteringLabel: 'By registering, you accept our ',
  termsOfUseLabel: 'Terms of use',
  andLabel: 'and',
  privacePolicyLabel: 'Privacy Policy',
  newToPocketPayLabel: 'New to PocketPay ?',
  signUpLabel: 'Sign up',
  alreadyHaveAnAccntLabel: 'Already have an account ? ',
}

export const BusinessRegistrationConsts = {
  options: [
    {
      name: 'Zemoso technologies pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'Zentech solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'ZedX Infotech pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'Zeswe Solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'TZeswe Solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
  ],
  categoryList: [
    {
      name: 'Design, marketing or communication',
      code: 'AB',
    },
    {
      name: 'Health, sports or personal care',
      code: 'AC',
    },
    {
      name: 'Real estate or construction',
      code: 'AD',
    },
    {
      name: 'Education or learning',
      code: 'AE',
    },
    {
      name: 'Others',
      code: 'AF',
    },
  ],
  subCategoryList: [
    {
      name: 'Real estate sale, purchase and management',
      code: 'BA',
    },
  ],
  businessSizeList: [
    {
      name: '50-100',
      code: 'AB',
    },
    {
      name: '100-1000',
      code: 'AC',
    },
  ],
}
export const registrationCountryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: true,
  },
  {
    code: 'AE',
    label: 'United Kingdom',
    logo: UKLogo,
    disabled: false,
  },
  {
    code: 'AF',
    label: 'Austria',
    logo: AustriaLogo,
    disabled: true,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: true,
  },
]

export const passwordFieldConsts = {
  children: 'Create your password',
  label: 'Password',
  helperText: 'Enter your password',
  inputwidth: '516px',
  inputheight: '60px',
  height: '40px',
}

export const homePageConsts = {
  HOME_HEADER: 'Home',
  SEND_MONEY_BUTTON: 'Send money',
  NONE_BODY_TEXT:
    'This is where you’ll see your activity and transactions. Choose how you’d like to get started.',
  SHARE_POPUP_HEADER: 'Share tracking link',
  SHARE_POPUP_BODY:
    'Share the link above, and they can securely track this transfer.',
  CANCEL_POPUP_HEADER: 'Where would you like us to refund the money?',
  CANCEL_POPUP_BUTTON: 'Cancel transfer',
}

export const sendMoneyPageConsts = {
  sendMoneyHeader: 'What would you like to do today?',
  cardPrimary1: 'Send Money',
  cardSecondary1: 'Pay an international employee, invoice, or expense',
  cardPrimary2: 'Finish Account Setup',
  cardSecondary2:
    'Get balances in multiple currencies, and take buisness goals',
}
