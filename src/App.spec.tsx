import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import { debug } from "console";

describe("App component", () => {
  it("should render list item ", () => {
    const { getByText } = render(<App />);
    expect(getByText("Lucas")).toBeInTheDocument();
    expect(getByText("Helen")).toBeInTheDocument();
    expect(getByText("Dorameros")).toBeInTheDocument();
  });

  it("should be able to add new to the list", async () => {
    const { getByText, getAllByText, getByPlaceholderText, debug , findByText, queryByText} = render(<App />);

    const addButton = getByText("Adicionar");
    const removeButton = getAllByText("remove item")
    const input = getByPlaceholderText("novo item");

    await userEvent.setup().type(input, "Novo");
    await userEvent.setup().click(addButton);
    await userEvent.setup().click(removeButton[0]);


    await waitFor(()=>{
      expect(queryByText("Lucas")).not.toBeInTheDocument();
     
    })
   
    
    // debug();
  });
});


