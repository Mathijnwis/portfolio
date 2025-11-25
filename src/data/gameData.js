// src/data/gameData.js

export const games = [
  {
    id: 1,
    title: "Not mario maker -1",
    description: "Mario maker but simple made for the wiiu.",
    imageUrl: "/images/game1-front.png",
    tech: ['Unity', 'C#', 'WiiU'],
    gameLink: "https://mathijnhaat.itch.io/not-mario-maker-1",
    
    slug: "not-mario-maker-1",
    details: {
      longDescription: "This project was a deep dive into creating a user-friendly level editor and a robust physics system on a console with specific limitations like the WiiU. The core challenge was designing an intuitive UI for the WiiU GamePad's touch screen while ensuring that user-created levels were performant and bug-free.",
      gallery: [
        "/images/game1.png",
        "/images/game1-gallery1.png",
        "/images/game1-gallery2.png",
      ],
      whatILearned: [
        "How to fix getting touch input coordinates correctly on the WiiU GamePad.",
        "Optimizing small things for better performance.",
        "How to use both gamepad and tv screen.",
        "Using / making custom grid systems."
      ],
      featuredCode: {
        language: 'csharp',
        code: `
            private void HandleWiiUInput()
            {
                GamePadState currentState = GamePad.access.state;
                if (currentState.touch.validity == TouchValidity.Valid)
                {
                    const float GAMEPAD_WIDTH = 852.0f, GAMEPAD_HEIGHT = 480.0f; 
                    float normalizedX = currentState.touch.x / GAMEPAD_WIDTH; 
                    float normalizedY = 1f - (currentState.touch.y / GAMEPAD_HEIGHT); 
                    Vector3 screenPoint = new Vector3(normalizedX * Screen.width, normalizedY * Screen.height, 0);

                    Vector2 worldPoint = mainCam.ScreenToWorldPoint(screenPoint);
                    HandleInteraction(worldPoint, isDeleting || currentState.IsPressed(GamePadButton.X));
                }
            }
        `
      }
    }
  },
  {
    id: 2,
    title: "Party Islands",
    description: "A Local multieplayer game where you can play minigame's agains you friends.",
    imageUrl: "/images/game6.png",
    tech: ['Unity', 'C#', 'Local Multiplayer', 'PC'], 
    gameLink: "https://mathijnhaat.itch.io/party",
    slug: "party-islands",
    details: {
      longDescription: "Party Islands is a collection of competitive and fun minigames built for couch multiplayer. The main focus was making gameplay fast, accessible, and engaging for groups of friends sharing one screen. The design challenge was ensuring balance and variety between minigames while keeping controls intuitive for new players.",
      gallery: [
        "/images/game6.png"
      ],
      whatILearned: [
        "First time working with the (new) Input System.",
        "Handling local multiplayer input with multiple controllers.",
        "Using Objects over multiple scenes."
      ],
      featuredCode: {
        language: 'csharp',
        code: `
            private IEnumerator MoveObjectAndCameraOverTime(int i) 
    {
        float totalMoveDistance = windUpPower[i] * speed;
        float moveTime = totalMoveDistance / speed;
        moveTime = moveTime / 4;
        float elapsedTime = 0f;
        Vector3 initialPosition = Transforms[i].position;
        Vector3 initialCameraPosition = camaratransform.position;
        while (elapsedTime < moveTime)
        {
            float moveAmount = Mathf.Lerp(0, totalMoveDistance, elapsedTime / moveTime);
            Transforms[i].position = initialPosition + Vector3.right * moveAmount;
            camaratransform.position = initialCameraPosition + Vector3.right * moveAmount;

            elapsedTime += Time.deltaTime;
            yield return null;
        }
        Transforms[i].position = initialPosition + Vector3.right * totalMoveDistance;
        camaratransform.position = initialCameraPosition + Vector3.right * totalMoveDistance;
    }
        `
      }
    }
  },
  {
    id: 3,
    title: "RNG SHOOTER",
    description: "A online multieplayer shooter where spread recoil ammo and other things are randomized.",
    imageUrl: "/images/game2.png",
    tech: ['Unity', 'C#', 'Photon', 'Multiplayer', 'PC'], 
    gameLink: "https://mathijnhaat.itch.io/rng-shooter",
    slug: "rng-shooter",
    details: {
      longDescription: "RNG Shooter is a fast-paced online FPS where every shot feels unpredictable. Weapons have randomized properties such as spread, recoil, and ammo, creating chaotic and fun encounters. The challenge was networking these mechanics consistently across players using Photon, while still keeping gameplay fair and synchronized.",
      gallery: [
        "/images/game2.png"
      ],
      whatILearned: [
        "Using Photon for real-time online multiplayer.",
        "Synchronizing Times over different clients.",
        "Creating weapons with recoil,spread."
      ],
      featuredCode: {
        language: 'csharp',
        code: `
            [PunRPC]
    public void TakeDamage(float damage)
    {
        animator.SetTrigger("hit");
        float newdamage = damage;
        if (Movementscript.isBlocking == true)
        {
            newdamage = newdamage * 0.25f;
        }
        heath -= newdamage;
        heathText.text = heath.ToString();
        HPSlider.value = heath;
        fillImage.color = Gradient.Evaluate(HPSlider.normalizedValue);
        StartCoroutine(AnimateDamageEffect());
        if (heath <= 0f)
        {
            mainobject.transform.position = new Vector3(0, 1.5f, 0);
            heath = 100f;
            heathText.text = heath.ToString();
            HPSlider.value = heath;
        }
    }
        `
      }
    }
  },
  {
    id: 4,
    title: "not roblox tycoon",
    description: "A online multieplayer where you can play a simple tycoon with your friends.",
    imageUrl: "/images/game3.png",
    tech: ['Unity', 'C#', 'Photon', 'Multiplayer', 'PC'], 
    gameLink: "https://mathijnhaat.itch.io/not-roblox-tycoon",
    slug: "not-roblox-tycoon",
    details: {
      longDescription: "not roblox tycoon is a roblox tycoon where can buy spawner's (spawner's spawn block that give money when colected) so you can buy more spawners and earn more money can become rich1!",
      gallery: [
        "/images/game3-gallery1.png",
        "/images/game3-gallery2.png",
        "/images/game3-gallery3.png"
      ],
      whatILearned: [
        "How to synchronize the money cubes and Buildings.",
        "First time working with Photon.",
        "Added discord rich presence(show on discord what ur playing) "
      ],
      featuredCode: {
        language: 'csharp',
        code: `
            void UpdatePresence(string state, string details, string largeImageText)
    {
        var activityManager = discord.GetActivityManager();
        var activity = new Discord.Activity
        {
            State = state,
            Details = details,
            Timestamps =
            {
                Start = (long)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds
            },
            Assets =
            {
                LargeImage = "notrobloxtycoon",
                LargeText = largeImageText
            }
        };
        activityManager.UpdateActivity(activity, (res) =>
        {
            if (res != Discord.Result.Ok)
            {
                Debug.LogError("Failed to update Discord presence: " + res);
            }
        });
    }
        `
      }
    }
  },
  {
    id: 5,
    title: "Rum rage roulette",
    description: "A online multieplayer where you can fight ur friend in a boxing ring.",
    imageUrl: "/images/game7.png",
    tech: ['Unity', 'C#', 'Photon', 'Multiplayer', 'PC'], 
    gameLink: "https://mathijnhaat.itch.io/rrr",
    slug: "rum-rage-roulette",
    details: {
      longDescription: "Rum rage roulette is a game where you can fight ur friend trow bottels in a boxing ring and gamble ur life saving away",
      gallery: [
        "/images/game7.png",
        "/images/game7-gallery1.png",
        "/images/game7-gallery2.png"
      ],
      whatILearned: [
        "Synchronizing player animation's online.",
        "Making a close combat fight system.",
        "Making a gambling machine."
      ],
      featuredCode: {
        language: 'csharp',
        code: `
            public void wincalculation()
    {
        for (int j = 0; j < WinningRenderers.Length; j++)
        {
            WinningRenderers[j].sharedMaterial = Materials[Random.Range(0, Materials.Length)];
        }
        if (Random.Range(0f, 100f) > winProbability)
        {
            Debug.Log("lose");
            StartCoroutine(losethings());
            if (WinningRenderers[1].sharedMaterial == WinningRenderers[4].sharedMaterial &&
                WinningRenderers[4].sharedMaterial == WinningRenderers[7].sharedMaterial)
            {
                Debug.Log("same materials");
            }

        }
        else
        {
            Debug.Log("win");
            for (int i = 0; i < chanses.Length; i++)
            {
                StartCoroutine(winthings());
                if (Random.Range(0f, 100f) < chanses[i])
                {
                    WinningRenderers[1].sharedMaterial = Materials[i];
                    WinningRenderers[4].sharedMaterial = Materials[i];
                    WinningRenderers[7].sharedMaterial = Materials[i];
                    return;
                }
            }
        }
    }
        `
      }
    }
  }
];
