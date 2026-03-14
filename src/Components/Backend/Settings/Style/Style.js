import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  BButtonGroup,
  BoxControl,
  ColorControl,
  Device,
  Label,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {} } = attributes;
  console.log(styles);

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label={__("Width", "b-blocks")}
          value={styles?.container?.width || "100%"}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "width"),
            })
          }
        />
        <Background
          value={styles?.container?.bg}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "bg"),
            })
          }
        />
        <PanelRow>
          <Label>{__("Margin", "b-blocks")}</Label>
          <Device />
        </PanelRow>

        <BoxControl
          className="mt15"
          label={__("", "b-blocks")}
          values={
            styles?.container?.margin[device] || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "margin", device),
            })
          }
        />
        <PanelRow>
          <Label>{__("Padding", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt15"
          label={__("", "b-blocks")}
          values={
            styles?.container?.padding[device] || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "padding", device),
            })
          }
        />
        <BoxControl
          className="mt15"
          label={__("Radius", "b-blocks")}
          values={
            styles?.container?.radius || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "radius"),
            })
          }
        />
        <BButtonGroup
          className="mt15"
          label={__("Alignment", "b-blocks")}
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
          value={styles?.container?.alignment || "center"}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "container", "alignment"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "b-blocks")}
        initialOpen={false}
      >
        <Label>{__("Padding", "b-blocks")}</Label>

        <BoxControl
          className="mt15"
          label={__("", "b-blocks")}
          values={
            styles?.card?.padding || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "padding"),
            })
          }
        />
        <BoxControl
          className="mt15"
          label={__("Radius", "b-blocks")}
          values={
            styles?.card?.radius || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "radius"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Content", "b-blocks")}
        initialOpen={false}
      >
        <Background
          value={styles?.content?.overlay}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "content", "overlay"),
            })
          }
        />
        <ColorControl
          label={__("Title Color", "b-blocks")}
          value={styles?.title?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "title", "color"),
            })
          }
        />

        <BoxControl
          className="mt15"
          label={__("Title Margin", "b-blocks")}
          values={
            styles?.title?.margin || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "title", "margin"),
            })
          }
        />
        <Typography
          label={__("Title Typography", "b-blocks")}
          value={styles?.title?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "title", "typo"),
            })
          }
        />

        <ColorControl
          label={__("Description Color", "b-blocks")}
          value={styles?.description?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "description", "color"),
            })
          }
        />

        <BoxControl
          className="mt15"
          label={__("Description Margin", "b-blocks")}
          values={
            styles?.description?.margin || {
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }
          }
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "description", "margin"),
            })
          }
        />
        <Typography
          label={__("Description Typography", "b-blocks")}
          value={styles?.description?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "description", "typo"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
