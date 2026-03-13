import { __ } from '@wordpress/i18n';

import { PanelBody, } from '@wordpress/components';
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import OneSetting from '../../../Common/cards/OneSetting';


const General = ({ attributes, setAttributes }) => {

  return (
 
   <>
      <PanelBody title={__('Add or Remove Cards', 'b-blocks')} initialOpen={true}>
         <ItemsPanel
              // newItem={themeSixNewCard}
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