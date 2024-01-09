import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-Multilingual component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StyleguideMultilingual(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Styleguide-Multilingual',
    templateName: 'AstroApp-Styleguide-Multilingual',
    icon: SitecoreIcon.FlagGeneric,
    fields: [
      {
        name: 'sample',
        type: CommonFieldTypes.SingleLineText,
        displayName: 'This field has a translated value',
      },
    ],
    // inherit fields from another template (../templates/Styleguide-Explanatory-Component)
    // inheritance adds fields defined on the base template(s) implicitly to this component
    inherits: [
      'AstroApp-styleguide-explanatory-component-template',
    ],
  });
}
