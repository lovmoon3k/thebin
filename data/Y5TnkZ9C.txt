using UnityEngine.InputSystem;
using UnityEngine;
using System;

public class Interactor : MonoBehaviour
{
    [SerializeField] float maxInteractingDistance = 10;
    [SerializeField] float interactingRadius = 1;

	LayerMask layerMask;
	Transform cameraTransform;
    InputAction interactAction;
    
    //For Gizmo
    Vector3 origin;
	Vector3 direction;
    Vector3 hitPosition;
    float hitDistance;

    [HideInInspector] public Interactable interactableTarget;

    // Start is called before the first frame update
    void Start()
    {
		cameraTransform = Camera.main.transform;
		layerMask = LayerMask.GetMask("Interactable","Enemy","NPC");

		interactAction = GetComponent<PlayerInput>().actions["Interact"];
		interactAction.performed += Interact;
    }
	// Update is called once per frame
	void Update()
    {
		direction = cameraTransform.forward;
		origin = cameraTransform.position;
		RaycastHit hit;

        if (Physics.SphereCast(origin, interactingRadius, direction, out hit, maxInteractingDistance, layerMask))
        {
            hitPosition = hit.point;
            hitDistance = hit.distance;
            if(hit.transform.TryGetComponent<Interactable>(out interactableTarget))
            {
                interactableTarget.TargetOn();
            }
        }
        else if (interactableTarget)
        {
            interactableTarget.TargetOff();
            interactableTarget = null;
        }
    }
    private void Interact(InputAction.CallbackContext obj)
    {
        if (interactableTarget != null)
        {
            if (Vector3.Distance(transform.position,interactableTarget.transform.position)<= interactableTarget.interactionDistance)
            {
                interactableTarget.Interact();
            }
        }
        else
        {
            print("nothing to interact!");
        }
    }
    private void OnDrawGizmos()
	{
		Gizmos.color = Color.green;
		Gizmos.DrawLine(origin,origin+direction * hitDistance);
		Gizmos.DrawWireSphere(hitPosition, interactingRadius);
	}
	private void OnDestroy()
	{
        interactAction.performed -= Interact;
    }
}
