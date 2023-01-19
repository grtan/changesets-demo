import { print as aPrint } from '@greenhand/changeset-demo-a'
import { print as bPrint } from '@greenhand/changeset-demo-b'

export function print() {
  aPrint()
  bPrint()
  console.log('module c')
}
