import {
  Backdrop_default,
  Fade_default,
  Modal_default,
  Paper_default
} from "./chunk-CDZDAFHP.js";
import {
  DialogContext_default
} from "./chunk-4BAGBDMX.js";
import {
  useSlot
} from "./chunk-2AVNMPMD.js";
import {
  memoTheme_default
} from "./chunk-IZCR4VOJ.js";
import {
  capitalize_default
} from "./chunk-E727PCLN.js";
import {
  useDefaultProps
} from "./chunk-YUEXATKJ.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useId,
  useTheme
} from "./chunk-4HSK5L4A.js";
import {
  require_react
} from "./chunk-W24JOBID.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/Dialog/Dialog.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/Dialog/dialogClasses.js
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var dialogClasses_default = dialogClasses;

// node_modules/@mui/material/Dialog/Dialog.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize_default(scroll)}`],
    paper: ["paper", `paperScroll${capitalize_default(scroll)}`, `paperWidth${capitalize_default(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
var DialogRoot = styled_default(Modal_default, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
var DialogContainer = styled_default("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${capitalize_default(ownerState.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
});
var DialogPaper = styled_default(Paper_default, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${capitalize_default(ownerState.scroll)}`], styles[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(memoTheme_default(({
  theme
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
    props: {
      maxWidth
    },
    style: {
      maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
})));
var Dialog = React.forwardRef(function Dialog2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    "aria-modal": ariaModal = true,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onBackdropClick,
    onClick,
    onClose,
    open,
    PaperComponent = Paper_default,
    PaperProps = {},
    scroll = "paper",
    slots = {},
    slotProps = {},
    TransitionComponent = Fade_default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  };
  const classes = useUtilityClasses(ownerState);
  const backdropClick = React.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  const backwardCompatibleSlots = {
    transition: TransitionComponent,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionProps,
    paper: PaperProps,
    backdrop: BackdropProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: DialogRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  });
  const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
    elementType: DialogBackdrop,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DialogPaper,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.paper, PaperProps.className)
  });
  const [ContainerSlot, containerSlotProps] = useSlot("container", {
    elementType: DialogContainer,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.container)
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Fade_default,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }
  });
  return (0, import_jsx_runtime.jsx)(RootSlot, {
    closeAfterTransition: true,
    slots: {
      backdrop: BackdropSlot
    },
    slotProps: {
      backdrop: {
        transitionDuration,
        as: BackdropComponent,
        ...backdropSlotProps
      }
    },
    disableEscapeKeyDown,
    onClose,
    open,
    onClick: handleBackdropClick,
    ...rootSlotProps,
    ...other,
    children: (0, import_jsx_runtime.jsx)(TransitionSlot, {
      ...transitionSlotProps,
      children: (0, import_jsx_runtime.jsx)(ContainerSlot, {
        onMouseDown: handleMouseDown,
        ...containerSlotProps,
        children: (0, import_jsx_runtime.jsx)(PaperSlot, {
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby,
          "aria-modal": ariaModal,
          ...paperSlotProps,
          children: (0, import_jsx_runtime.jsx)(DialogContext_default.Provider, {
            value: dialogContextValue,
            children
          })
        })
      })
    })
  });
});
true ? Dialog.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": import_prop_types.default.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": import_prop_types.default.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["false", "true"]), import_prop_types.default.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types.default.elementType,
  /**
   * @ignore
   */
  BackdropProps: import_prop_types.default.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types.default.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: import_prop_types.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types.default.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types.default.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: import_prop_types.default.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: import_prop_types.default.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: import_prop_types.default.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    backdrop: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    container: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    paper: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    transition: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    backdrop: import_prop_types.default.elementType,
    container: import_prop_types.default.elementType,
    paper: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    transition: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: import_prop_types.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
    appear: import_prop_types.default.number,
    enter: import_prop_types.default.number,
    exit: import_prop_types.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: import_prop_types.default.object
} : void 0;
var Dialog_default = Dialog;

export {
  getDialogUtilityClass,
  dialogClasses_default,
  Dialog_default
};
//# sourceMappingURL=chunk-N3P2NIVK.js.map
