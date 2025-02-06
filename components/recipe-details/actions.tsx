'use client';

import { useReactToPrint } from 'react-to-print';

import { useRecipeContext } from '@/store/recipe-details/hooks';
import ActionButton from './action-button';
import PrinterIcon from '@/assets/icons/printer';
import ShareIcon from '@/assets/icons/share';
import { handleRecipeShare } from '@/utils/handle-recipe-share';

export default function RecipeActions() {
  const { recipe, ref } = useRecipeContext();

  const handlePrint = useReactToPrint({
    contentRef: ref,
    documentTitle: recipe.title,
    bodyClass: 'm-8',
  });

  return (
    <div className="flex gap-8 items-center uppercase text-xs text-center">
      <ActionButton
        icon={<PrinterIcon />}
        label="print"
        action={() => handlePrint()}
      />
      <ActionButton
        icon={<ShareIcon />}
        label="share"
        action={() => handleRecipeShare(recipe)}
      />
    </div>
  );
}
