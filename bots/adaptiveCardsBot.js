// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, CardFactory } = require("botbuilder");

// Import AdaptiveCard content.
const FlightItineraryCard = require("../resources/FlightItineraryCard.json");
const ImageGalleryCard = require("../resources/ImageGalleryCard.json");
const LargeWeatherCard = require("../resources/LargeWeatherCard.json");
const RestaurantCard = require("../resources/RestaurantCard.json");
const SolitaireCard = require("../resources/SolitaireCard.json");

// New  cards

const FirstCandidateListCard = require("../resources/FirstCandidateListCard.json");
const SecondCreateOfferCard = require("../resources/SecondCreateOfferCard.json");
const ThirdOnboardingCard = require("../resources/ThirdOnboardingCard.json");
const ForthAppProvisionedCard = require("../resources/ForthAppProvisionedCard.json");
const FifthProvisionCard = require("../resources/FifthProvisionCard.json");
const SixthCardSendEmail = require("../resources/SixthCardSendEmail.json");
const SeventhInputCard = require("../resources/SeventhInputCard.json");
const EightSuccessMessageForm = require("../resources/EightSuccessMessageForm.json");
// Create array of AdaptiveCard content, this will be used to send a random card to the user.
const CARDS = [
  // FlightItineraryCard,
  // ImageGalleryCard,
  // LargeWeatherCard,
  //   RestaurantCard,
  //   SolitaireCard,

  // New created cards
  FirstCandidateListCard,
  SecondCreateOfferCard,
  ThirdOnboardingCard,
  ForthAppProvisionedCard,
  FifthProvisionCard,
  SixthCardSendEmail,
  SeventhInputCard,
  EightSuccessMessageForm,
];

const WELCOME_TEXT =
  "This bot will introduce you to Adaptive Cards. Type anything to see an Adaptive Card.";

class AdaptiveCardsBot extends ActivityHandler {
  constructor() {
    super();
    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded;
      for (let cnt = 0; cnt < membersAdded.length; cnt++) {
        if (membersAdded[cnt].id !== context.activity.recipient.id) {
          await context.sendActivity(
            `Welcome to Adaptive Cards Bot  ${membersAdded[cnt].name}. ${WELCOME_TEXT}`
          );
        }
      }

      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });

    this.onMessage(async (context, next) => {
      // const randomlySelectedCard =
      //   CARDS[Math.floor(Math.random() * CARDS.length - 1 + 1)];
      // await context.sendActivity({
      //   text: "Here is an Adaptive Card:",
      //   attachments: [CardFactory.adaptiveCard(randomlySelectedCard)],
      // });
      console.log("1 1  1 context.activity", context.activity.value);

      //submit event
      if (context.activity.value) {
        console.log("context.activity", context.activity.value);
        switch (context.activity.value.card) {
          case "Create Offer":
            await context.sendActivity({
              text: "Fill in the details",
              attachments: [CardFactory.adaptiveCard(CARDS[1])],
            });
            break;
          case "Offer Cancelled":
            await context.sendActivity({
              text: " David's offer is cancelled",
              // attachments: [CardFactory.adaptiveCard(CARDS[1])],
            });
            break;
          case "Confirm":
            await context.sendActivity({
              text: "David signed the offer",
              attachments: [CardFactory.adaptiveCard(CARDS[2])],
            });
            break;
          case "Cancel Offer":
            await context.sendActivity({
              text: " David offer is cancelled",
            });
            break;
          case "Onboard":
            await context.sendActivity({
              text: "David signed the offer",
              attachments: [CardFactory.adaptiveCard(CARDS[3])],
            });
            break;
          case "Select the provision equipment":
            await context.sendActivity({
              attachments: [CardFactory.adaptiveCard(CARDS[4])],
            });
            break;
          case "let's welcome David":
            await context.sendActivity({
              attachments: [CardFactory.adaptiveCard(CARDS[5])],
            });
            break;
          case "Send emal":
            await context.sendActivity({
              text: "One last step",
              attachments: [CardFactory.adaptiveCard(CARDS[6])],
            });
            break;
          case "Email sent":
            await context.sendActivity({
              text: "Email sent successfully",
              attachments: [CardFactory.adaptiveCard(CARDS[7])],
            });
            break;
          case "Email is not sent":
            await context.sendActivity({
              text: "Email is not sent",
            });
            break;
        }
      }
      if (context.activity.text === "Hello") {
        await context.sendActivity({
          text: "Here are the list of candidaye",
          attachments: [CardFactory.adaptiveCard(CARDS[0])],
        });
      }
      //
      // if (context.activity.text === "Hello") {
      //   await context.sendActivity({
      //     text: "Here are the list of candidaye",
      //     attachments: [CardFactory.adaptiveCard(CARDS[0])],
      //   });
      // } else if (context.activity.text === "Create Offer") {
      //   await context.sendActivity({
      //     text: "Fill in the details",
      //     attachments: [CardFactory.adaptiveCard(CARDS[1])],
      //   });
      // } else if (context.activity.text === "Offer Cancelled") {
      //   await context.sendActivity({
      //     text: " David offer is cancelled",
      //     // attachments: [CardFactory.adaptiveCard(CARDS[1])],
      //   });
      // } else if (context.activity.text === "Confirm") {
      //   await context.sendActivity({
      //     text: "David signed the offer",
      //     attachments: [CardFactory.adaptiveCard(CARDS[2])],
      //   });
      // } else if (context.activity.text === "Cancel Offer") {
      //   await context.sendActivity({
      //     text: " David offer is cancelled",
      //   });
      // } else if (context.activity.text === "Onboard") {
      //   await context.sendActivity({
      //     text: "David signed the offer",
      //     attachments: [CardFactory.adaptiveCard(CARDS[3])],
      //   });
      // } else if (context.activity.text === "Select the provision equipment") {
      //   await context.sendActivity({
      //     attachments: [CardFactory.adaptiveCard(CARDS[4])],
      //   });
      //   console.log("context.activity", context.activity);
      // } else if (context.activity.text === "let's welcome David") {
      //   await context.sendActivity({
      //     attachments: [CardFactory.adaptiveCard(CARDS[5])],
      //   });
      // } else if (context.activity.text === "Send emal") {
      //   await context.sendActivity({
      //     text: "One last step",
      //     attachments: [CardFactory.adaptiveCard(CARDS[6])],
      //   });
      // } else if (context.activity.text === "Email sent") {
      //   await context.sendActivity({
      //     text: "Email sent successfully",
      //   });
      // }
      // else if (context.activity.text === "Email is not sent") {
      //   await context.sendActivity({
      //     text: "Email is not sent",
      //   });
      // }
      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }
}

module.exports.AdaptiveCardsBot = AdaptiveCardsBot;
