import React from "react";
import Tech from "../Tech/view";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { techsReducerMocks, techsFavouritesMocks, techsMocks } from "./Mocks";
import "../../Utils/i18n/";

describe("Techs component", () => {

    test("should render tech component", async () => {
        render(
            <Tech
                actionDispatcher={jest.fn()}
                techsReducer={techsReducerMocks}
            />
        );

        expect((await screen.findByTestId("tech_title")).innerHTML).toBe("Techs");
        cleanup();
    });

    test("should change text in tech name filter", async () => {

        render(
            <Tech
                actionDispatcher={jest.fn()}
                techsReducer={techsReducerMocks}
            />
        );

        const searchInput = await screen.findByPlaceholderText("Tech name");
        fireEvent.change(searchInput, { target: { value: "Android" } });

        expect(searchInput.value).toBe("Android");
        cleanup();
    });

    test("should render all techs rows", async () => {
        render(
            <Tech actionDispatcher={jest.fn()} techsReducer={techsReducerMocks} />,
        );

        expect((await screen.findAllByTestId("tech_rows")).length).toBe(techsMocks.length);
        cleanup();
    });


    test("should render checked techs", async () => {
        const { container } = render(
            <Tech
                actionDispatcher={jest.fn()}
                techsReducer={techsReducerMocks}
            />
        );

        expect(container.querySelectorAll("input[type='checkbox']:checked").length).toBe(techsFavouritesMocks.length);
        cleanup();
    });

});