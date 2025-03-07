# WhatsApp Bot for Heroku

### 💡 **Kupata Session ID**
Ili kupata **Session ID** kwa bot yako, tafadhali **bonyeza** kwenye link ya chini:

[Get Session ID](https://kadili-session.onrender.com)

> *Hakikisha una-save session ID yako kwa usalama.*

---

### 🚀 **Kudeploy WhatsApp Bot kwa Heroku**

1. **Tengeneza App ya Heroku**  
   Nenda kwenye Heroku, bonyeza **Deploy to Heroku** chini ili ku-deploy bot yako kwa urahisi:

   [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/termuxboy-255/reply-BOT)

   **Mambo Muhimu ya Kuweka:**
   - Kwenye `.env` file yako, hakikisha umeweka `SESSION_ID` na `APP_NAME` kama ilivyoelezwa hapo juu.
   
2. **Washa Bot kwenye Heroku**  
   Baada ya ku-deploy, hakikisha kuwa bot yako inaendelea kufanya kazi kwa kufuata hatua hizi:
   - **Scale worker process:** 
     ```bash
     heroku ps:scale worker=1
     ```

3. **Angalia Logs Kama Kuna Tatizo**  
   - Angalia logs kupitia Heroku dashboard ili kuona kama kuna matatizo yoyote yanayotokea.

---

### 🏁 **Hitimisho**

✅ Ukiwa umefuata hatua hizi, bot yako itafanya kazi kwa urahisi kwenye Heroku. 🚀



# Kadili Phone Store WhatsApp Bot

Hii ni WhatsApp bot inayosaidia wateja kununua simu kwa urahisi. 🚀

## Jinsi ya Kutumia
1. Tuma ujumbe kwa bot kwa kusema `hi`, `hello`, `mambo`, au `habari`.
2. Chagua aina ya simu kwa kuandika namba:
   - `1` kwa Android
   - `2` kwa iPhone
3. Chagua kampuni ya Android au aina ya iPhone unayotaka.
4. Chagua simu unayotaka na uandike kiasi cha kulipa kama malipo ya awali.

## Kudeploy Bot
### 1. Clone Repo
```bash
git clone https://github.com/kadili/whatsapp-bot.git
cd whatsapp-bot
