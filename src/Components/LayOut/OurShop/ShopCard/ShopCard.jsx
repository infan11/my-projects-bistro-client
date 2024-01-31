
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import CardCategory from '../CardCategory/CardCategory';
const ShopCard = () => {
    const [menu] = UseMenu();
    
    const Popular = menu.filter(items => items.category === "popular");
    const Salad = menu.filter(items => items.category === "salad" )
    const Drinks = menu.filter(items => items.category === "drinks")
    const Dessert = menu.filter(items => items.category ===   "dessert")
    const Pizza = menu.filter(items => items.category === "pizza")
    const Offered = menu.filter(items => items.category === "offered")

    return (
        <div  className=''>
            <Tabs data-aos="fade-down" >
    <TabList>
      <Tab>Popular </Tab>
      <Tab> Salad</Tab>
      <Tab> Drinks</Tab>
      <Tab>Dessert </Tab>
      <Tab>Pizza</Tab>
      
    </TabList>
<TabPanel><CardCategory items={Popular}></CardCategory></TabPanel>
<TabPanel><CardCategory items={Salad}></CardCategory></TabPanel>
 <TabPanel><CardCategory  items={Drinks}></CardCategory></TabPanel>
 <TabPanel><CardCategory items={Dessert}></CardCategory></TabPanel>
 <TabPanel><CardCategory   items={Pizza}></CardCategory></TabPanel>
 <TabPanel><CardCategory items={Offered}></CardCategory></TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopCard;