import colors from "./colors";

export default {
    "borderWidths": {
        "0": "0px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "default": "1px"
    },
    "breakpoints": [
        "640px",
        "768px",
        "1024px",
        "1280px",
        "1536px"
    ],
    "colors": {
        ...colors,
        "transparent": "transparent",
        "black": "#000",
        "white": "#fff",
        "grayDark": "#1f2937",
        "text": "#1f2937",
        "background": "#fff",
        "primary": "#1d4ed8",
        "primaryHover": "#1e40af",
        "secondary": "#4b5563",
        "muted": "#d1d5db",
        "success": "#86efac",
        "info": "#60a5fa",
        "warning": "#fde047",
        "danger": "#fca5a5",
        "light": "#f3f4f6",
        "dark": "#1f2937",
        "textMuted": "#4b5563"
    },
    "fonts": {
        "sans": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        "serif": "ui-serif,Georgia,Cambria,Times New Roman,Times,serif",
        "mono": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
        "body": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        "heading": "inherit",
        "monospace": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"
    },
    "fontSizes": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "default": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
    },
    "fontWeights": {
        "hairline": 100,
        "thin": 200,
        "light": 300,
        "normal": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700,
        "extrabold": 800,
        "black": 900,
        "body": 400,
        "heading": 700
    },
    "letterSpacings": {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
    },
    "lineHeights": {
        "3": ".75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "none": "1",
        "tight": "1.25",
        "snug": "1.375",
        "normal": "1.5",
        "relaxed": "1.625",
        "loose": "2",
        "body": "1.625",
        "heading": "1.25"
    },
    "sizes": {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "px": "1px",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "full": "100%",
        "screenHeight": "100vh",
        "screenWidth": "100vw"
    },
    "shadows": {
        "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "default": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
    },
    "space": [
        "0",
        "0.25rem",
        "0.5rem",
        "1rem",
        "2rem",
        "4rem",
        "8rem",
        "16rem",
        "32rem"
    ],
    "radii": {
        "none": "0px",
        "sm": "0.125rem",
        "default": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
    },
    "zIndices": {
        "0": 0,
        "10": 10,
        "20": 20,
        "30": 30,
        "40": 40,
        "50": 50,
        "auto": "auto"
    },
    "styles": {
        "root": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body"
        },
        "a": {
            "color": "primary",
            "textDecoration": "none",
            ":hover": {
                "textDecoration": "underline"
            }
        },
        "h1": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 6,
            "mt": 2
        },
        "h2": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 5,
            "mt": 2
        },
        "h3": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 4,
            "mt": 3
        },
        "h4": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 3
        },
        "h5": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 2
        },
        "h6": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 2,
            "fontSize": 1
        },
        "code": {},
        "pre": {},
        "hr": {
            "bg": "muted",
            "border": 0,
            "height": "1px",
            "m": 3
        }
    },
    "buttons": {
        "simple": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
                "backgroundColor": "primaryHover"
            }
        },
        "pill": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "full",
            "&:hover": {
                "backgroundColor": "primaryHover"
            }
        },
        "outline": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "transparent",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primary",
            "color": "primary",
            "fontWeight": "semibold",
            "borderRadius": "default",
            "&:hover": {
                "backgroundColor": "primary",
                "color": "white",
                "borderColor": "transparent"
            }
        },
        "bordered": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
                "backgroundColor": "primaryHover"
            }
        },
        "disabled": {
            "py": 2,
            "px": 3,
            "cursor": "not-allowed",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "opacity": 0.5,
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default"
        },
        "3D": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "borderBottomWidth": "4px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "transition": "transform 0.3s ease-in-out",
            "&:hover": {
                "transform": "translateY(-1px)"
            }
        },
        "elevated": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "white",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "gray.4",
            "color": "text",
            "fontWeight": "bold",
            "borderRadius": "default",
            "boxShadow": "default",
            "&:hover": {
                "backgroundColor": "gray.1"
            }
        }
    },
    "inputs": {
        "shadow": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "border": "none",
            "color": "gray.7",
            "boxShadow": "default",
            "&:focus": {
                "outline": "none",
                "boxShadow": "outline"
            }
        },
        "inline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "gray.2",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderColor": "gray.2",
            "color": "gray.7",
            "&:focus": {
                "outline": "none",
                "borderColor": "primary",
                "backgroundColor": "white"
            }
        },
        "underline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "0px",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "transparent",
            "border": "none",
            "borderBottomWidth": "2px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primary",
            "color": "gray.7",
            "&:focus": {
                "outline": "none",
                "borderColor": "primary",
                "backgroundColor": "white"
            }
        }
    },
    "transforms": {
        "transformOrigin": {
            "center": "center",
            "top": "top",
            "top-right": "top right",
            "right": "right",
            "bottom-right": "bottom right",
            "bottom": "bottom",
            "bottom-left": "bottom left",
            "left": "left",
            "top-left": "top left"
        },
        "translate": {
            "0": "0",
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "8": "2rem",
            "10": "2.5rem",
            "12": "3rem",
            "16": "4rem",
            "20": "5rem",
            "24": "6rem",
            "32": "8rem",
            "40": "10rem",
            "48": "12rem",
            "56": "14rem",
            "64": "16rem",
            "px": "1px",
            "-full": "-100%",
            "-1/2": "-50%",
            "1/2": "50%",
            "full": "100%"
        },
        "scale": {
            "0": "0",
            "50": ".5",
            "75": ".75",
            "90": ".9",
            "95": ".95",
            "100": "1",
            "105": "1.05",
            "110": "1.1",
            "125": "1.25",
            "150": "1.5"
        },
        "rotate": {
            "0": "0",
            "45": "45deg",
            "90": "90deg",
            "180": "180deg",
            "-180": "-180deg",
            "-90": "-90deg",
            "-45": "-45deg"
        },
        "skew": {
            "0": "0",
            "3": "3deg",
            "6": "6deg",
            "12": "12deg",
            "-12": "-12deg",
            "-6": "-6deg",
            "-3": "-3deg"
        }
    },
    "transitions": {
        "property": {
            "none": "none",
            "all": "all",
            "default": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
            "colors": "background-color, border-color, color, fill, stroke",
            "opacity": "opacity",
            "shadow": "box-shadow",
            "transform": "transform"
        },
        "timingFunction": {
            "default": "cubic-bezier(0.4, 0, 0.2, 1)",
            "linear": "linear",
            "in": "cubic-bezier(0.4, 0, 1, 1)",
            "out": "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        "duration": {
            "75": "75ms",
            "100": "100ms",
            "150": "150ms",
            "200": "200ms",
            "300": "300ms",
            "500": "500ms",
            "700": "700ms",
            "1000": "1000ms",
            "default": "150ms"
        }
    }
}