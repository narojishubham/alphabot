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
      if (context.activity.text === "1") {
        await context.sendActivity({
          text: "Here is the list of candidaye",
          attachments: [CardFactory.adaptiveCard(CARDS[0])],
        });
      } else if (context.activity.text === "2") {
        await context.sendActivity({
          text: "Fill in the details",
          attachments: [CardFactory.adaptiveCard(CARDS[1])],
        });
      } else if (context.activity.text === "3") {
        await context.sendActivity({
          text: "David signed the offer",
          attachments: [CardFactory.adaptiveCard(CARDS[2])],
        });
      } else if (context.activity.text === "4") {
        await context.sendActivity({
          text: "David signed the offer",
          attachments: [CardFactory.adaptiveCard(CARDS[3])],
        });
      } else if (context.activity.text === "5") {
        await context.sendActivity({
          // text: "David signed the offer",
          attachments: [CardFactory.adaptiveCard(CARDS[4])],
        });
      } else if (context.activity.text === "6") {
        await context.sendActivity({
          text: "Select the vrovision equipment",
          attachments: [CardFactory.adaptiveCard(CARDS[5])],
        });
      } else if (context.activity.text === "7") {
        await context.sendActivity({
          text: "One last step",
          attachments: [CardFactory.adaptiveCard(CARDS[6])],
        });
      } else if (context.activity.text === "8") {
        await context.sendActivity({
          text: "Fill the Form",
          attachments: [CardFactory.adaptiveCard(CARDS[7])],
        });
      }

      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }
}

module.exports.AdaptiveCardsBot = AdaptiveCardsBot;
