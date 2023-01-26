using System.Collections;
using UnityEngine;

public class PickUpItem : Interactable
{
	[Header("Item Data")]	
	[SerializeField] string itemName;
    //[SerializeField] Item item;
    //[SerializeField] int amount = 1;

    public override void Start()
	{
		base.Start();
        //interactableName = item.itemName;
        interactableName = itemName;		
    }

    protected override void Interaction()
	{
		base.Interaction();
        print("I put " + itemName + " in my inventory.");
        Destroy(this.gameObject);
		
		//animation
		//animator.SetTrigger("PickUp");

		//add to inventory via events
		//Events.AddInventoryItem(item,amount);

	}

}
