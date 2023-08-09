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

import styled from "@emotion/styled"

interface StyledDetailsProps {
  isStale: boolean
}

export const StyledDetails = styled.details<StyledDetailsProps>(
  ({ isStale, theme }) => ({
    marginBottom: 0,
    marginTop: 0,
    width: "100%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.colors.fadedText10,
    borderRadius: theme.radii.lg,
    ...(isStale
      ? {
          borderColor: theme.colors.fadedText05,
          transition: "border 1s ease-in 0.5s",
        }
      : {}),
  })
)

export const StyledSummaryHeading = styled.span(() => ({
  flexGrow: 1,
}))

export const StyledSummary = styled.summary(({ theme }) => ({
  display: "flex",
  width: "100%",
  "&:focus": {
    outline: "none",
    color: theme.colors.primary,
  },
  "&:focus svg": {
    fill: theme.colors.primary,
  },
  paddingLeft: theme.spacing.lg,
  paddingRight: theme.spacing.lg,
  paddingTop: theme.spacing.md,
  paddingBottom: theme.spacing.md,
  listStyleType: "none",
  "&:hover": {
    color: theme.colors.primary,
  },
  "&:hover svg": {
    fill: theme.colors.primary,
  },
}))

export const StyledDetailsPanel = styled.div(({ theme }) => ({
  paddingBottom: theme.spacing.md,
  paddingLeft: theme.spacing.lg,
  paddingRight: theme.spacing.lg,
}))

export const StyledEmptyDetailsPanel = styled.div(({ theme }) => ({
  color: theme.colors.darkGray,
  fontStyle: "italic",
  fontSize: theme.fontSizes.sm,
  textAlign: "center",
  paddingBottom: theme.spacing.lg,
  paddingLeft: theme.spacing.lg,
  paddingRight: theme.spacing.lg,
}))

export const StyledExpandableContainer = styled.div(() => ({}))
