import {
  formControlState
} from "./chunk-IBWUGY4Z.js";
import {
  createSimplePaletteValueFilter
} from "./chunk-TAPUFPH2.js";
import {
  memoTheme_default
} from "./chunk-IZCR4VOJ.js";
import {
  useFormControl
} from "./chunk-I67WC4TH.js";
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
  styled_default
} from "./chunk-4HSK5L4A.js";
import {
  require_react
} from "./chunk-W24JOBID.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/FormLabel/FormLabel.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/FormLabel/formLabelClasses.js
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/FormLabel/FormLabel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
var FormLabelRoot = styled_default("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color === "secondary" && styles.colorSecondary, ownerState.filled && styles.filled];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${formLabelClasses_default.focused}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${formLabelClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      },
      [`&.${formLabelClasses_default.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }
  }]
})));
var AsteriskComponent = styled_default("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})(memoTheme_default(({
  theme
}) => ({
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
var FormLabel = React.forwardRef(function FormLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    color,
    component = "label",
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsxs)(FormLabelRoot, {
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    ...other,
    children: [children, fcs.required && (0, import_jsx_runtime.jsxs)(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  });
});
true ? FormLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: import_prop_types.default.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: import_prop_types.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: import_prop_types.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var FormLabel_default = FormLabel;

export {
  getFormLabelUtilityClasses,
  formLabelClasses_default,
  FormLabelRoot,
  FormLabel_default
};
//# sourceMappingURL=chunk-ZLQ3IRLB.js.map
