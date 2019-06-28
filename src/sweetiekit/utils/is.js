export const view = el => el instanceof UIView;
export const textField = el => el instanceof UITextField;
export const viewController = el => el instanceof UIViewController;
export const navController = el => el instanceof UINavigationController;
export const tapRecognizer = el => el instanceof UITapGestureRecognizer;
export const imageView = el => el instanceof UIImageView;
export const stackView = el => el instanceof UIStackView;
export const tabBarController = el => el instanceof UITabBarController;

export const skNode = el => el instanceof SKNode;
export const skScene = el => el instanceof SKScene;
export const skSpriteNode = el => el instanceof SKSPriteNode;
export const skView = el => el instanceof SKView;
