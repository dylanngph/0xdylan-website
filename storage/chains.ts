import {atomWithStorage} from 'jotai/utils'
import { ChainId } from '@bionlabs/core-sdk'

export const chainAtoms = atomWithStorage('chains', ChainId.BSC_TESTNET)