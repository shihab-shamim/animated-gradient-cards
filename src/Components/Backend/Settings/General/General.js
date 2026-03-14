import { __ } from '@wordpress/i18n';

import { PanelBody, ToggleControl } from '@wordpress/components';
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import OneSetting from '../../../Common/cards/OneSetting';


const General = ({ attributes, setAttributes }) => {
  const { options = {} } = attributes;

  const newCard={
    image:{url:"https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/animated-border-cards/images/img-1.avif"},
    title: "Card Title",
    description: "Card Description",
    linkUrl: "#",
    linkText: "Read more →"
  }

  return (
 
   <>
      
      <PanelBody title={__('Add or Remove Cards', 'b-blocks')} initialOpen={true}>
         <ItemsPanel
              newItem={newCard}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="cardsData"
              itemLabel="Card"
              ItemSettings={OneSetting}
              // premiumProps={premiumProps}
            />
        
      </PanelBody>

      <PanelBody title={__('Elements', 'b-blocks')} initialOpen={false}>
        <ToggleControl
          label={__('Show Title', 'b-blocks')}
          checked={options.isTitle}
          onChange={(value) => setAttributes({ options: { ...options, isTitle: value } })}
        />
        <ToggleControl
          label={__('Show Description', 'b-blocks')}
          checked={options.isDescription}
          onChange={(value) => setAttributes({ options: { ...options, isDescription: value } })}
        />
        <ToggleControl
          label={__('Show Button/Link', 'b-blocks')}
          checked={options.isButton}
          onChange={(value) => setAttributes({ options: { ...options, isButton: value } })}
        />
        {options.isButton && (
           <ToggleControl
             label={__('Open Link in New Tab', 'b-blocks')}
             checked={options.isOpenLink}
             onChange={(value) => setAttributes({ options: { ...options, isOpenLink: value } })}
           />
        )}
      </PanelBody>
      
   </>
      



   
  )
}

export default General