// Copyright 2017-2020 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-call */

import BN from 'bn.js';
import { useMemo } from 'react';
import { timeToString } from '@canvas-ui/react-util';
import { useApi } from '@canvas-ui/react-hooks';
import { BN_ONE, extractTime } from '@polkadot/util';
import { useTranslation } from './translate';

type Result = [number, string];

const DEFAULT_TIME = new BN(6000);

export default function useBlockTime (blocks = BN_ONE): Result {
  const { t } = useTranslation();
  const { api } = useApi();

  return useMemo(
    (): Result => {
      const blockTime = (
        api.consts.babe?.expectedBlockTime ||
        api.consts.timestamp?.minimumPeriod.muln(2) ||
        DEFAULT_TIME
      );

      return [
        blockTime.toNumber(),
        timeToString(t, extractTime(blockTime.mul(blocks).toNumber()))
      ];
    },
    [api, blocks, t]
  );
}
