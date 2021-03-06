// Copyright 2017-2020 @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BareProps } from './types';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useToggle } from '@canvas-ui/react-hooks';

import Icon from './Icon';
import { classes } from '@canvas-ui/react-util';
import Tooltip from './Tooltip';

interface Props extends BareProps {
  help: React.ReactNode;
}

let id = 0;

function LabelHelp ({ className = '', help }: Props): React.ReactElement<Props> {
  const [trigger] = useState(`label-help-${++id}`);
  const [isTooltipOpen, toggleTooltip] = useToggle();

  return (
    <div className={classes('ui--LabelHelp', className)}>
      <Icon
        data-for={trigger}
        data-tip
        name='help circle'
        onMouseOut={toggleTooltip}
        onMouseOver={toggleTooltip}
      />
      {isTooltipOpen && (
        <Tooltip
          text={help}
          trigger={trigger}
        />
      )}
    </div>
  );
}

export default React.memo(styled(LabelHelp)`
  cursor: help;
  display: inline-block;
  line-height: 1rem;
  margin: 0 0 0 0.25rem;
`);
