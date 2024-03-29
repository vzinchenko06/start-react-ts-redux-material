import { createStyles, Theme, withStyles } from '@material-ui/core'
import MuiInputBase from '@material-ui/core/InputBase'
import { darken } from '@material-ui/core/styles'
import { colors } from '../../../theme'

const Input = withStyles((theme: Theme) => createStyles({
  root: {
    borderRadius: 3,
    backgroundColor: theme.palette.common.white,
    border: `solid 1px ${colors.border}`,
    transition: theme.transitions.create(['border-color']),
    '&:hover': {
      borderColor: darken(colors.border, theme.palette.action.hoverOpacity)
    }
  },
  focused: {
    borderColor: theme.palette.action.active,
    '&:hover': {
      borderColor: darken(theme.palette.action.active, theme.palette.action.hoverOpacity)
    }
  },
  disabled: {
    borderColor: theme.palette.action.disabled,
    backgroundColor: theme.palette.action.disabledBackground,
    '&:hover': {
      borderColor: theme.palette.action.disabled
    }
  },
  error: {
    borderColor: colors.borderError,
    '&:hover': {
      borderColor: darken(colors.borderError, theme.palette.action.hoverOpacity)
    }

  }
}))(MuiInputBase)

export default Input