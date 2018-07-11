import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerSpecs from './beer_specs/beer_specs';
import Description from './beer_description/description';

class App extends Component {
  
  render() {
    let beerSpec = {
      og_low: "1.050",
      og_high: "1.075",
      fg_low: "1.010",
      fg_high: "1.018",
      ibu_low: "40",
      ibu_high: "60",
      srm_low: "6",
      srm_high: "14",
      abv_low: "5.0",
      abv_high: "7.5"
    }

    let description = {
      name: "English IPA",
      subcategory: "12C",
      detailed_description: {
        Impression: "A hoppy, moderately-strong, very well-attenuated pale British ale with a dry finish and a hoppy aroma and flavor. Classic British ingredients provide the best flavor profile.",
        Aroma: "A moderate to moderately-high hop aroma of floral, spicy-peppery or citrus-orange in nature is typical. A slightly grassy dry-hop aroma is acceptable, but not required. A moderately-low caramel-like or toasty malt presence is optional. Low to moderate fruitiness is acceptable. Some versions may have a sulfury note, although this character is not mandatory.",
        Appearance: "Color ranges from golden to deep amber, but most are fairly pale. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Moderate-sized, persistent head stand with off-white color.",
        Flavour: "Hop flavor is medium to high, with a moderate to assertive hop bitterness. The hop flavor should be similar to the aroma (floral, spicy-peppery, citrus-orange, and/or slightly grassy). Malt flavor should be medium-low to medium, and be somewhat bready, optionally with light to medium-light biscuit-like, toasty, toffee-like and/or caramelly aspects. Medium-low to medium fruitiness. Finish is medium-dry to very dry, and the bitterness may linger into the aftertaste but should not be harsh. The balance is toward the hops, but the malt should still be noticeable in support. If high sulfate water is used, a distinctively minerally, dry finish, some sulfur flavor, and a lingering bitterness are usually present. Some clean alcohol flavor can be noted in stronger versions. Oak is inappropriate in this style.",
        Mouthfeel: "Smooth, medium-light to medium-bodied mouthfeel without hop-derived astringency, although moderate to medium-high carbonation can combine to render an overall dry sensation despite a supportive malt presence. A low, smooth alcohol warming can and should be sensed in stronger (but not all) versions.",
        Comments: "The attributes of IPA that were important to its arrival in good condition in India were that it was very well-attenuated, and heavily hopped. Simply because this is how IPA was shipped, doesn&#8217;t mean that other beers such as Porter weren&#8217;t also sent to India, that IPA was invented to be sent to India, that IPA was more heavily hopped than other keeping beers, or that the alcohol level was unusual for the time. Many modern examples labeled IPA are quite weak in strength. According to CAMRA, &#8220;so-called IPAs with strengths of around 3.5% are not true to style.&#8221; English beer historian Martyn Cornell has commented that beers like this are &#8220;not really distinguishable from an ordinary bitter.&#8221; So we choose to agree with these sources for our guidelines rather than what some modern British breweries are calling an IPA; just be aware of these two main types of IPAs in the British market today.",
        History: "Accounts of its origins vary, but most agree that what became later known as IPA was pale ale prepared for shipment to India in the late 1700s and early 1800s. George Hodgson of the Bow Brewery became well-known as an exporter of IPA during the early 1800s, and is the first name frequently mentioned with its popularity. As with all English beers with a long history, the popularity and formulation of the product changed over time. Burton breweries with their high-sulfate water were able to successfully brew IPA and began their domination of this market by the 1830s, around the time the name India Pale Ale was first used. Strength and popularity declined over time, and the style virtually disappeared in the second half of the 20th century. The name was often used to describe pale ales and bitters, not anything special (a trend that continues in some modern British examples). The style underwent a craft beer rediscovery in the 1980s, and is what is described in these guidelines. Modern examples are inspired by classic versions, but shouldn't be assumed to have an unbroken lineage with the exact same profile. White Shield is probably the example with the longest lineage, tracing to the strong Burton IPAs of old and first brewed in 1829.",
        Ingredients: "Pale ale malt. English hops are traditional, particularly as finishing hops. Attenuative British ale yeast. Refined sugar may be used in some versions. Some versions may show a sulfate character from Burton-type water, but this is not essential to the style.",
        Comparison: "Generally will have more finish hops and less fruitiness and/or caramel than British pale ales and bitters. Has less hop intensity and a more pronounced malt flavor than typical American versions.", 
        Examples: "Freeminer Trafalgar IPA, Fuller's Bengal Lancer IPA, Meantime India Pale Ale, Ridgeway IPA, Summit True Brit IPA, Thornbridge Jaipur, Worthington White Shield",
        Tags: "high-strength, pale-color, top-fermented, british-isles, traditional-style, ipa-family, bitter, hoppy"
      }
    }

    return (
      <div className="App">
      <table>
        <tbody>
        <tr>
          <td style={
            {
              maxWidth: 500,
              textAlign: "left"
            }
            }>
              <Description description={description} />
          </td>
          <td>
              <BeerSpecs beerSpec={beerSpec}/>
            </td>
        </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
