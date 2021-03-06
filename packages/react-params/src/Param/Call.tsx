// Copyright 2017-2020 @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Extrinsic } from '@polkadot/types/interfaces';
import { Props } from '../types';

import React from 'react';
import { registry } from '@canvas-ui/react-api';
import { Call, Static } from '@canvas-ui/react-components';

import Bare from './Bare';
import Unknown from './Unknown';

function CallDisplay (props: Props): React.ReactElement<Props> {
  const { className = '', defaultValue: { value }, isDisabled, label, withLabel } = props;

  if (!isDisabled) {
    return (
      <Unknown {...props} />
    );
  }

  const call = value as Extrinsic;
  const { method, section } = registry.findMetaCall(call.callIndex);

  return (
    <Bare>
      <Static
        className={`${className} full`}
        label={label}
        withLabel={withLabel}
      >
        {section}.{method}
      </Static>
      <Call value={call} />
    </Bare>
  );
}

export default React.memo(CallDisplay);
