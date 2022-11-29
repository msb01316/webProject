import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import InfoPane from './Components/InfoPane';
import NewPost from './Components/NewPost';
import {useState} from "react";

function App() {
  const [posts, setPosts] = useState(WIKIS);
  const [validLogin, setValidLogin] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} setPosts={setPosts} validLogin={validLogin} isLoggedIn={setValidLogin}/>}/>
      <Route path="/login" element={<LoginPage isLoggedIn={setValidLogin}/>}/>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/detail/:wikiTitle" element={<InfoPane posts={posts} setPosts={setPosts} validLogin={validLogin}/>} />
      <Route path="/new" element={<NewPost posts={posts} setPosts={setPosts} />} />
    </Routes>
  );
}

export default App;

//temporary hardcoded set of wikis; I made 4 of each to test wrapping and overflow
const WIKIS = [
  {title: "An oak Tree", 
  img: "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  text: "An oak is a tree or shrub in the genus Quercus (/'kwɜ:rkəs/; Latin \"oak tree\") of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name \"oak\" also appears in the names of species in related genera, notably Lithocarpus (stone oaks), as well as in those of unrelated species such as Grevillea robusta (silky oaks) and the Casuarinaceae (she-oaks). The genus Quercus is native to the Northern Hemisphere, and includes deciduous and evergreen species extending from cool temperate to tropical latitudes in the Americas, Asia, Europe, and North Africa. North America has the largest number of oak species, with approximately 160 species in Mexico of which 109 are endemic and about 90 in the United States. The second greatest area of oak diversity is China, with approximately 100 species."},
  {title: "A tabby cat",
  img: "https://images.pexels.com/photos/13693648/pexels-photo-13693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  text: "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status."},
  {title: "A pile of potatoes. There are at least twenty of them visible.",
  img: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  text: "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae."},
  // {title: "An oak Tree 2", 
  // img: "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "An oak is a tree or shrub in the genus Quercus (/'kwɜ:rkəs/; Latin \"oak tree\") of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name \"oak\" also appears in the names of species in related genera, notably Lithocarpus (stone oaks), as well as in those of unrelated species such as Grevillea robusta (silky oaks) and the Casuarinaceae (she-oaks). The genus Quercus is native to the Northern Hemisphere, and includes deciduous and evergreen species extending from cool temperate to tropical latitudes in the Americas, Asia, Europe, and North Africa. North America has the largest number of oak species, with approximately 160 species in Mexico of which 109 are endemic and about 90 in the United States. The second greatest area of oak diversity is China, with approximately 100 species."},
  // {title: "A tabby cat 2",
  // img: "https://images.pexels.com/photos/13693648/pexels-photo-13693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status."},
  // {title: "A pile of potatoes 2. There are many. At least twenty of them.",
  // img: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae."},
  // {title: "An oak Tree 3", 
  // img: "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "An oak is a tree or shrub in the genus Quercus (/'kwɜ:rkəs/; Latin \"oak tree\") of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name \"oak\" also appears in the names of species in related genera, notably Lithocarpus (stone oaks), as well as in those of unrelated species such as Grevillea robusta (silky oaks) and the Casuarinaceae (she-oaks). The genus Quercus is native to the Northern Hemisphere, and includes deciduous and evergreen species extending from cool temperate to tropical latitudes in the Americas, Asia, Europe, and North Africa. North America has the largest number of oak species, with approximately 160 species in Mexico of which 109 are endemic and about 90 in the United States. The second greatest area of oak diversity is China, with approximately 100 species."},
  // {title: "A tabby cat 3",
  // img: "https://images.pexels.com/photos/13693648/pexels-photo-13693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status."},
  // {title: "A pile of potatoes 3. There are many. At least twenty of them.",
  // img: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae."},
  // {title: "An oak Tree 4", 
  // img: "https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "An oak is a tree or shrub in the genus Quercus (/'kwɜ:rkəs/; Latin \"oak tree\") of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name \"oak\" also appears in the names of species in related genera, notably Lithocarpus (stone oaks), as well as in those of unrelated species such as Grevillea robusta (silky oaks) and the Casuarinaceae (she-oaks). The genus Quercus is native to the Northern Hemisphere, and includes deciduous and evergreen species extending from cool temperate to tropical latitudes in the Americas, Asia, Europe, and North Africa. North America has the largest number of oak species, with approximately 160 species in Mexico of which 109 are endemic and about 90 in the United States. The second greatest area of oak diversity is China, with approximately 100 species."},
  // {title: "A tabby cat 4",
  // img: "https://images.pexels.com/photos/13693648/pexels-photo-13693648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "A tabby is any domestic cat (Felis catus) with a distinctive 'M'-shaped marking on its forehead; stripes by its eyes and across its cheeks, along its back, and around its legs and tail; and (differing by tabby type), characteristic striped, dotted, lined, flecked, banded, or swirled patterns on the body—neck, shoulders, sides, flanks, chest, and abdomen. \"Tabby\" is not a breed of cat, but a coat type seen in almost all genetic lines of domestic cats, regardless of status."},
  // {title: "A pile of potatoes 4. There are many. At least twenty of them.",
  // img: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // text: "The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae."}

];