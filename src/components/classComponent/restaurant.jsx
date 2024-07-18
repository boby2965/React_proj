import { Component } from "react";
import React from "react";
import UnorderedList from "../list/unorderedList";
import axios from "axios";
import Images from "../images/images";

class Restaurant extends Component {
  state = {
    recipeList: [],
    loading: true,
  };

  FetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");
    if (status === 200) {
      this.setState({
        recipeList: data.recipes,
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.FetchData();
  }

  render() {
    return (
      <>
        <h2>Resturant Items & Recepies</h2>
        {this.state.loading ? (
          <h4>Please Wait ....</h4>
        ) : (
          <>
            <table border="1px">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Ingredients</th>
                  <th>Instructions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.recipeList.map((each) => {
                  const { name, image, id, ingredients, instructions } = each;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>
                        {" "}
                        <Images
                          source={image}
                          width={80}
                          height={80}
                        ></Images>{" "}
                      </td>
                      <td>{ingredients}</td>
                      <td>{instructions}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </>
    );
  }
}

export default Restaurant;
