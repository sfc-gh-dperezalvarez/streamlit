/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useEffect, useState } from "react"
import { ExpandMore, ExpandLess } from "@emotion-icons/material-outlined"
import { Block as BlockProto } from "@streamlit/lib/src/proto"

import Icon from "@streamlit/lib/src/components/shared/Icon"
import StreamlitMarkdown from "@streamlit/lib/src/components/shared/StreamlitMarkdown"

import {
  StyledExpandableContainer,
  StyledSummary,
  StyledSummaryHeading,
  StyledDetailsPanel,
  StyledEmptyDetailsPanel,
  StyledDetails,
} from "./styled-components"

export interface ExpanderProps {
  element: BlockProto.Expandable
  isStale: boolean
  empty: boolean
}

const Expander: React.FC<ExpanderProps> = ({
  element,
  isStale,
  empty,
  children,
}): ReactElement => {
  const { label, expanded: initialExpanded } = element

  const [expanded, setExpanded] = useState<boolean>(initialExpanded)
  useEffect(() => {
    setExpanded(initialExpanded)
    // Having `label` in the dependency array here is necessary because
    // sometimes two distinct expanders look so similar that even the react
    // diffing algorithm decides that they're the same element with updated
    // props (this happens when something in the app removes one expander and
    // replaces it with another in the same position).
    //
    // By adding `label` as a dependency, we ensure that we reset the
    // expander's `expanded` state in this edge case.
  }, [label, initialExpanded])

  const toggle = (): void => setExpanded(!expanded)

  return (
    <StyledExpandableContainer data-testid="stExpander">
      <StyledDetails
        isStale={isStale}
        onToggle={toggle}
        open={initialExpanded}
      >
        <StyledSummary>
          <StyledSummaryHeading>
            <StreamlitMarkdown source={label} allowHTML={false} isLabel />
          </StyledSummaryHeading>
          {expanded ? (
            <Icon content={ExpandLess} size="lg" />
          ) : (
            <Icon content={ExpandMore} size="lg" />
          )}
        </StyledSummary>
        {!empty ? (
          <StyledDetailsPanel>{children}</StyledDetailsPanel>
        ) : (
          <StyledEmptyDetailsPanel>empty</StyledEmptyDetailsPanel>
        )}
      </StyledDetails>
    </StyledExpandableContainer>
  )
}

export default Expander
