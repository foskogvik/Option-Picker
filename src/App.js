import { useState, useEffect } from "react";
import { ModalProvider } from "styled-react-modal";

import Header from "./Components/Header";
import Action from "./Components/Action";
import Options from "./Components/Options";
import AddOption from "./Components/AddOption";
import OptionModal from "./Components/OptionModal";

import { Wrapper, Container, Widget } from "./styles/App.styled";

function App() {
  // State
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await fetch("http://localhost:5000/options");
        if (!res.ok) {
          throw Error("Cannot connect to server.");
        } else {
          const data = await res.json();
          setOptions(data);
          return data;
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOptions();
  }, []);

  // API related functions

  // Clear all options
  const clearOptions = async () => {
    await Promise.all(
      options.map(({ id }) => {
        fetch(`http://localhost:5000/options/${id}`, {
          method: "DELETE",
        });
      })
    );
    setOptions([]);
  };

  // Delete one option
  const deleteOption = async (id) => {
    await fetch(`http://localhost:5000/options/${id}`, {
      method: "DELETE",
    });
    setOptions(options.filter((option) => option.id !== id));
    // IDs auto increment kinda strangely. Not worrying about it.
  };

  // If local checks pass. write new option to DB
  const addOptionToDb = async (option) => {
    try {
      const res = await fetch("http://localhost:5000/options", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(option),
      });
      const data = await res.json();

      setOptions([...options, data]);
    } catch (error) {
      console.log(error);
    }
  };

  // APP level funtionality

  //Check validity of option and add to state.
  const addOption = (option) => {
    if (!option.text) {
      return "Enter valid value to add item";
    } else if (
      options.find((existingOption) => {
        return existingOption.text === option.text;
      })
    ) {
      return "This option already exists";
    } else {
      addOptionToDb(option);
    }
  };
  // this function seems to always console log its set value first. Might wanna look into it
  const handleClearSelectedOption = () => {
    setSelectedOption(undefined);
  };

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    setSelectedOption(options[randomNum]);
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <Action hasOptions={options.length > 0} handlePick={handlePick} />
        {/* <div> TEMPORARY SOLUTION FOR API CALL ERRORS. WILL SEE TO LATAH.  
          <h1>{error}</h1>
        </div> */}
        <Widget>
          <Options
            options={options}
            clearOptions={clearOptions}
            deleteOption={deleteOption}
          />
          <AddOption handleAddOption={addOption} />
          <ModalProvider>
            <OptionModal
              handleClearSelectedOption={handleClearSelectedOption}
              selectedOption={selectedOption}
            />
          </ModalProvider>
        </Widget>
      </Container>
    </Wrapper>
  );
}

export default App;
