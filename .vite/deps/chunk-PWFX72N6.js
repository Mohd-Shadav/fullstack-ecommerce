import {
  createSvgIcon
} from "./chunk-336SCTM2.js";
import {
  useId_default
} from "./chunk-ZVEXCSLR.js";
import {
  useControlled_default
} from "./chunk-YKCCYK2A.js";
import {
  useForkRef_default
} from "./chunk-QEWMVXAY.js";
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
  chainPropTypes,
  clamp_default,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  isFocusVisible,
  require_jsx_runtime,
  require_prop_types,
  slotShouldForwardProp_default,
  styled_default,
  useRtl,
  visuallyHidden_default
} from "./chunk-4HSK5L4A.js";
import {
  require_react
} from "./chunk-W24JOBID.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/material/Rating/Rating.js
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/internal/svg-icons/Star.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Star_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star");

// node_modules/@mui/material/internal/svg-icons/StarBorder.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var StarBorder_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");

// node_modules/@mui/material/Rating/ratingClasses.js
function getRatingUtilityClass(slot) {
  return generateUtilityClass("MuiRating", slot);
}
var ratingClasses = generateUtilityClasses("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
var ratingClasses_default = ratingClasses;

// node_modules/@mui/material/Rating/Rating.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function getDecimalPrecision(num) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }
  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    size,
    readOnly,
    disabled,
    emptyValueFocused,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", `size${capitalize_default(size)}`, disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [emptyValueFocused && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return composeClasses(slots, getRatingUtilityClass, classes);
};
var RatingRoot = styled_default("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${ratingClasses_default.visuallyHidden}`]: styles.visuallyHidden
    }, styles.root, styles[`size${capitalize_default(ownerState.size)}`], ownerState.readOnly && styles.readOnly];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: theme.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${ratingClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${ratingClasses_default.focusVisible} .${ratingClasses_default.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${ratingClasses_default.visuallyHidden}`]: visuallyHidden_default,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: theme.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState
    }) => ownerState.readOnly,
    style: {
      pointerEvents: "none"
    }
  }]
})));
var RatingLabel = styled_default("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState
  }, styles) => [styles.label, ownerState.emptyValueFocused && styles.labelEmptyValueActive]
})({
  cursor: "inherit",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: "absolute",
      outline: "1px solid #999",
      width: "100%"
    }
  }]
});
var RatingIcon = styled_default("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.iconEmpty && styles.iconEmpty, ownerState.iconFilled && styles.iconFilled, ownerState.iconHover && styles.iconHover, ownerState.iconFocus && styles.iconFocus, ownerState.iconActive && styles.iconActive];
  }
})(memoTheme_default(({
  theme
}) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.iconEmpty,
    style: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }]
})));
var RatingDecimal = styled_default("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "iconActive",
  overridesResolver: (props, styles) => {
    const {
      iconActive
    } = props;
    return [styles.decimal, iconActive && styles.iconActive];
  }
})({
  position: "relative",
  variants: [{
    props: ({
      iconActive
    }) => iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }]
});
function IconContainer(props) {
  const {
    value,
    ...other
  } = props;
  return (0, import_jsx_runtime3.jsx)("span", {
    ...other
  });
}
true ? IconContainer.propTypes = {
  value: import_prop_types.default.number.isRequired
} : void 0;
function RatingItem(props) {
  const {
    classes,
    disabled,
    emptyIcon,
    focus,
    getLabelText,
    highlightSelectedOnly,
    hover,
    icon,
    IconContainerComponent,
    isActive,
    itemValue,
    labelProps,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    readOnly,
    ownerState,
    ratingValue,
    ratingValueRounded
  } = props;
  const isFilled = highlightSelectedOnly ? itemValue === ratingValue : itemValue <= ratingValue;
  const isHovered = itemValue <= hover;
  const isFocused = itemValue <= focus;
  const isChecked = itemValue === ratingValueRounded;
  const id = `${name}-${useId_default()}`;
  const container = (0, import_jsx_runtime3.jsx)(RatingIcon, {
    as: IconContainerComponent,
    value: itemValue,
    className: clsx_default(classes.icon, isFilled ? classes.iconFilled : classes.iconEmpty, isHovered && classes.iconHover, isFocused && classes.iconFocus, isActive && classes.iconActive),
    ownerState: {
      ...ownerState,
      iconEmpty: !isFilled,
      iconFilled: isFilled,
      iconHover: isHovered,
      iconFocus: isFocused,
      iconActive: isActive
    },
    children: emptyIcon && !isFilled ? emptyIcon : icon
  });
  if (readOnly) {
    return (0, import_jsx_runtime3.jsx)("span", {
      ...labelProps,
      children: container
    });
  }
  return (0, import_jsx_runtime3.jsxs)(React3.Fragment, {
    children: [(0, import_jsx_runtime3.jsxs)(RatingLabel, {
      ownerState: {
        ...ownerState,
        emptyValueFocused: void 0
      },
      htmlFor: id,
      ...labelProps,
      children: [container, (0, import_jsx_runtime3.jsx)("span", {
        className: classes.visuallyHidden,
        children: getLabelText(itemValue)
      })]
    }), (0, import_jsx_runtime3.jsx)("input", {
      className: classes.visuallyHidden,
      onFocus,
      onBlur,
      onChange,
      onClick,
      disabled,
      value: itemValue,
      id,
      type: "radio",
      name,
      checked: isChecked
    })]
  });
}
true ? RatingItem.propTypes = {
  classes: import_prop_types.default.object.isRequired,
  disabled: import_prop_types.default.bool.isRequired,
  emptyIcon: import_prop_types.default.node,
  focus: import_prop_types.default.number.isRequired,
  getLabelText: import_prop_types.default.func.isRequired,
  highlightSelectedOnly: import_prop_types.default.bool.isRequired,
  hover: import_prop_types.default.number.isRequired,
  icon: import_prop_types.default.node,
  IconContainerComponent: import_prop_types.default.elementType.isRequired,
  isActive: import_prop_types.default.bool.isRequired,
  itemValue: import_prop_types.default.number.isRequired,
  labelProps: import_prop_types.default.object,
  name: import_prop_types.default.string,
  onBlur: import_prop_types.default.func.isRequired,
  onChange: import_prop_types.default.func.isRequired,
  onClick: import_prop_types.default.func.isRequired,
  onFocus: import_prop_types.default.func.isRequired,
  ownerState: import_prop_types.default.object.isRequired,
  ratingValue: import_prop_types.default.number,
  ratingValueRounded: import_prop_types.default.number,
  readOnly: import_prop_types.default.bool.isRequired
} : void 0;
var defaultIcon = (0, import_jsx_runtime3.jsx)(Star_default, {
  fontSize: "inherit"
});
var defaultEmptyIcon = (0, import_jsx_runtime3.jsx)(StarBorder_default, {
  fontSize: "inherit"
});
function defaultLabelText(value) {
  return `${value || "0"} Star${value !== 1 ? "s" : ""}`;
}
var Rating = React3.forwardRef(function Rating2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiRating",
    props: inProps
  });
  const {
    component = "span",
    className,
    defaultValue = null,
    disabled = false,
    emptyIcon = defaultEmptyIcon,
    emptyLabelText = "Empty",
    getLabelText = defaultLabelText,
    highlightSelectedOnly = false,
    icon = defaultIcon,
    IconContainerComponent = IconContainer,
    max = 5,
    name: nameProp,
    onChange,
    onChangeActive,
    onMouseLeave,
    onMouseMove,
    precision = 1,
    readOnly = false,
    size = "medium",
    value: valueProp,
    ...other
  } = props;
  const name = useId_default(nameProp);
  const [valueDerived, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Rating"
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  const isRtl = useRtl();
  const [{
    hover,
    focus
  }, setState] = React3.useState({
    hover: -1,
    focus: -1
  });
  let value = valueRounded;
  if (hover !== -1) {
    value = hover;
  }
  if (focus !== -1) {
    value = focus;
  }
  const [focusVisible, setFocusVisible] = React3.useState(false);
  const rootRef = React3.useRef();
  const handleRef = useForkRef_default(rootRef, ref);
  const handleMouseMove = (event) => {
    if (onMouseMove) {
      onMouseMove(event);
    }
    const rootNode = rootRef.current;
    const {
      right,
      left,
      width: containerWidth
    } = rootNode.getBoundingClientRect();
    let percent;
    if (isRtl) {
      percent = (right - event.clientX) / containerWidth;
    } else {
      percent = (event.clientX - left) / containerWidth;
    }
    let newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp_default(newHover, precision, max);
    setState((prev) => prev.hover === newHover && prev.focus === newHover ? prev : {
      hover: newHover,
      focus: newHover
    });
    setFocusVisible(false);
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleMouseLeave = (event) => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleChange = (event) => {
    let newValue = event.target.value === "" ? null : parseFloat(event.target.value);
    if (hover !== -1) {
      newValue = hover;
    }
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };
  const handleClear = (event) => {
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }
    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);
    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };
  const handleFocus = (event) => {
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
    }
    const newFocus = parseFloat(event.target.value);
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const handleBlur = (event) => {
    if (hover !== -1) {
      return;
    }
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    const newFocus = -1;
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const [emptyValueFocused, setEmptyValueFocused] = React3.useState(false);
  const ownerState = {
    ...props,
    component,
    defaultValue,
    disabled,
    emptyIcon,
    emptyLabelText,
    emptyValueFocused,
    focusVisible,
    getLabelText,
    icon,
    IconContainerComponent,
    max,
    precision,
    readOnly,
    size
  };
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime3.jsxs)(RatingRoot, {
    as: component,
    ref: handleRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: clsx_default(classes.root, className, readOnly && "MuiRating-readOnly"),
    ownerState,
    role: readOnly ? "img" : null,
    "aria-label": readOnly ? getLabelText(value) : null,
    ...other,
    children: [Array.from(new Array(max)).map((_, index) => {
      const itemValue = index + 1;
      const ratingItemProps = {
        classes,
        disabled,
        emptyIcon,
        focus,
        getLabelText,
        highlightSelectedOnly,
        hover,
        icon,
        IconContainerComponent,
        name,
        onBlur: handleBlur,
        onChange: handleChange,
        onClick: handleClear,
        onFocus: handleFocus,
        ratingValue: value,
        ratingValueRounded: valueRounded,
        readOnly,
        ownerState
      };
      const isActive = itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1);
      if (precision < 1) {
        const items = Array.from(new Array(1 / precision));
        return (0, import_jsx_runtime3.jsx)(RatingDecimal, {
          className: clsx_default(classes.decimal, isActive && classes.iconActive),
          ownerState,
          iconActive: isActive,
          children: items.map(($, indexDecimal) => {
            const itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
            return (0, import_jsx_runtime3.jsx)(RatingItem, {
              ...ratingItemProps,
              // The icon is already displayed as active
              isActive: false,
              itemValue: itemDecimalValue,
              labelProps: {
                style: items.length - 1 === indexDecimal ? {} : {
                  width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }, itemDecimalValue);
          })
        }, itemValue);
      }
      return (0, import_jsx_runtime3.jsx)(RatingItem, {
        ...ratingItemProps,
        isActive,
        itemValue
      }, itemValue);
    }), !readOnly && !disabled && (0, import_jsx_runtime3.jsxs)(RatingLabel, {
      className: clsx_default(classes.label, classes.labelEmptyValue),
      ownerState,
      children: [(0, import_jsx_runtime3.jsx)("input", {
        className: classes.visuallyHidden,
        value: "",
        id: `${name}-empty`,
        type: "radio",
        name,
        checked: valueRounded == null,
        onFocus: () => setEmptyValueFocused(true),
        onBlur: () => setEmptyValueFocused(false),
        onChange: handleChange
      }), (0, import_jsx_runtime3.jsx)("span", {
        className: classes.visuallyHidden,
        children: emptyLabelText
      })]
    })]
  });
});
true ? Rating.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue: import_prop_types.default.number,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * The icon to display when empty.
   * @default <StarBorder fontSize="inherit" />
   */
  emptyIcon: import_prop_types.default.node,
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText: import_prop_types.default.node,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value || '0'} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText: import_prop_types.default.func,
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly: import_prop_types.default.bool,
  /**
   * The icon to display.
   * @default <Star fontSize="inherit" />
   */
  icon: import_prop_types.default.node,
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent: import_prop_types.default.elementType,
  /**
   * Maximum rating.
   * @default 5
   */
  max: import_prop_types.default.number,
  /**
   * The name attribute of the radio `input` elements.
   * This input `name` should be unique within the page.
   * Being unique within a form is insufficient since the `name` is used to generate IDs.
   */
  name: import_prop_types.default.string,
  /**
   * Callback fired when the value changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number|null} value The new value.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive: import_prop_types.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types.default.func,
  /**
   * @ignore
   */
  onMouseMove: import_prop_types.default.func,
  /**
   * The minimum increment value change allowed.
   * @default 1
   */
  precision: chainPropTypes(import_prop_types.default.number, (props) => {
    if (props.precision < 0.1) {
      return new Error(["MUI: The prop `precision` should be above 0.1.", "A value below this limit has an imperceptible impact."].join("\n"));
    }
    return null;
  }),
  /**
   * Removes all hover effects and pointer events.
   * @default false
   */
  readOnly: import_prop_types.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["small", "medium", "large"]), import_prop_types.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The rating value.
   */
  value: import_prop_types.default.number
} : void 0;
var Rating_default = Rating;

export {
  getRatingUtilityClass,
  ratingClasses_default,
  Rating_default
};
//# sourceMappingURL=chunk-PWFX72N6.js.map
