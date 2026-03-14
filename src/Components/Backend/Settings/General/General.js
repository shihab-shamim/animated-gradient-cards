import { __ } from '@wordpress/i18n';

import { PanelBody, } from '@wordpress/components';
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import OneSetting from '../../../Common/cards/OneSetting';


const General = ({ attributes, setAttributes }) => {
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
   </>
      



   
  )
}

export default General