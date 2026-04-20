import os
import asyncio
from typing import Any, cast
from browser_use import Agent
from langchain_google_genai import ChatGoogleGenerativeAI
from pydantic import SecretStr

# 1. Ta clé API
os.environ["GOOGLE_API_KEY"] = "TON_API_KEY_ICI"

async def main():
    # 2. On crée le modèle de base
    base_llm = ChatGoogleGenerativeAI(
        model="gemini-2.0-flash",
        google_api_key=SecretStr(os.environ["GOOGLE_API_KEY"])
    )

    # --- LE FIX DEFINITIF ---
    # On crée une classe qui hérite du modèle mais avec le champ 'provider' autorisé
    class GeminiFixed:
        def __init__(self, llm):
            self.llm = llm
            self.provider = 'google'
            self.model = getattr(llm, "model", "unknown")
            self.model_name = self.model
            self.name = self.model
        
        def __getattr__(self, name):
            return getattr(self.llm, name)
            
    llm = GeminiFixed(base_llm)
    # ------------------------

    task = """
    Va sur https://www.aventura-print.de/index.htm
    Connecte-toi avec ces identifiants:
    - Login: aventura-print.de
    - Mot de passe: Start2023-
    Si une fenêtre de consentement cookies apparaît, accepte-la.
    Après connexion:
    1. Prends une capture d'écran de la partie haute (bannière).
    2. Scrolle vers le milieu et prends une capture des produits.
    3. Scrolle tout en bas et prends une capture du footer.
    4. Décris simplement la disposition (couleurs, colonnes, menus) pour que je puisse la recréer.
    N'essaie pas d'extraire de JSON complexe, écris juste un texte simple.
    """
    
    # 3. Lancement de l'agent (on utilise notre llm patché)
    agent = Agent(task=task, llm=cast(Any, llm))
    history = await agent.run()
    
    # 4. Sauvegarde du résultat
    with open("blueprint_sedruck.md", "w") as f:
        f.write(history.final_result() or "")
    
    print("Analyse terminée ! Vérifie le fichier blueprint_sedruck.md")

if __name__ == "__main__":
    asyncio.run(main())