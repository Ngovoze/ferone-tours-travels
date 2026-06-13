"use client";

import { useEffect } from "react";

const OLD_CALL_NUMBER = "254710557164";
const NEW_CALL_LINK = "+2541141952775";
const NEW_CALL_DISPLAY = "+254 114 195 2775";

function replaceOldNumberInText(root: ParentNode){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while(walker.nextNode()){
    textNodes.push(walker.currentNode as Text);
  }

  for(const node of textNodes){
    const original = node.nodeValue || "";
    const updated = original
      .replaceAll("+254 710 557164", NEW_CALL_DISPLAY)
      .replaceAll("+254710557164", NEW_CALL_DISPLAY)
      .replaceAll("254710557164", NEW_CALL_DISPLAY);

    if(updated !== original){
      node.nodeValue = updated;
    }
  }
}

function syncCallLinks(){
  document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((link)=>{
    const href = link.getAttribute("href") || "";
    if(href.includes(OLD_CALL_NUMBER)){
      link.href = `tel:${NEW_CALL_LINK}`;
      link.setAttribute("aria-label", `Call Ferone Tours & Travels on ${NEW_CALL_DISPLAY}`);
    }
  });

  replaceOldNumberInText(document.body);
}

export function ContactNumberSync(){
  useEffect(()=>{
    syncCallLinks();

    const observer = new MutationObserver(()=>syncCallLinks());
    observer.observe(document.body, { childList: true, subtree: true });

    return ()=>observer.disconnect();
  }, []);

  return null;
}
