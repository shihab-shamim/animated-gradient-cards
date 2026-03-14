import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
} from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles = {} } = attributes;

  const mainSl = `#${id}`;
  const oneCardSectionWrapper = `${mainSl} .one-card-section-wrapper`;

  const alignment = styles?.container?.alignment || "center";
  let alignmentCss = "";
  if (alignment === "center") {
    alignmentCss = "justify-content: center;";
  } else if (alignment === "right") {
    alignmentCss = "justify-content: flex-end;";
  } else if (alignment === "left") {
    alignmentCss = "justify-content: flex-start;";
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} {
          display: flex;
          ${alignmentCss}
          
        }
		${oneCardSectionWrapper}{
	     ${getBackgroundCSS(styles?.container?.bg)}
		 ${
       styles?.container?.padding?.desktop
         ? `padding: ${getBoxCSS(styles.container.padding.desktop)};`
         : ""
     }
		 ${styles?.container?.width ? `width: ${styles.container.width};` : ""}
		 ${
       styles?.container?.margin?.desktop
         ? `margin: ${getBoxCSS(styles.container.margin.desktop)};`
         : ""
     }
		 ${
       styles?.container?.radius
         ? `border-radius: ${getBoxCSS(styles.container.radius)};`
         : ""
     }
			}

			${tabBreakpoint}{
				${oneCardSectionWrapper}{
					${
            styles?.container?.padding?.tablet
              ? `padding: ${getBoxCSS(styles.container.padding.tablet)};`
              : ""
          }
					${
            styles?.container?.margin?.tablet
              ? `margin: ${getBoxCSS(styles.container.margin.tablet)};`
              : ""
          }
				}
			}

			${mobileBreakpoint}{
				${oneCardSectionWrapper}{
					${
            styles?.container?.padding?.mobile
              ? `padding: ${getBoxCSS(styles.container.padding.mobile)};`
              : ""
          }
					${
            styles?.container?.margin?.mobile
              ? `margin: ${getBoxCSS(styles.container.margin.mobile)};`
              : ""
          }
				}
			}

	`,
      }}
    />
  );
};
export default Style;
